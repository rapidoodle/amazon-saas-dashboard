/**
 * Amazon Selling Partner API (SP-API) client — multi-tenant
 *
 * Each call is scoped to a store. Credentials (refresh token, seller ID,
 * marketplace ID) are resolved per-store from the database via lib/store.ts.
 * The AWS IAM keys and SaaS-level LWA app credentials stay in env vars.
 *
 * Required env vars (see .env.local.example):
 *   AMAZON_CLIENT_ID        — SaaS app client ID (from developer.amazon.com)
 *   AMAZON_CLIENT_SECRET    — SaaS app client secret
 *   AMAZON_AWS_ACCESS_KEY   — IAM access key with AmazonSellingPartnerAPIRole
 *   AMAZON_AWS_SECRET_KEY   — IAM secret key
 *   ENCRYPTION_KEY          — 64 hex chars for credential encryption
 */

import crypto from "crypto";
import type { ResolvedCredentials } from "@/lib/store";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SalesSummary {
  date: string;
  orderedProductSales: { amount: number; currencyCode: string };
  orderedProductSalesB2B: { amount: number; currencyCode: string };
  unitsOrdered: number;
  unitsOrderedB2B: number;
  totalOrderItems: number;
  totalOrderItemsB2B: number;
  averageSalesPerOrderItem: { amount: number; currencyCode: string };
  averageUnitsPerOrderItem: number;
  averageSellingPrice: { amount: number; currencyCode: string };
  unitsRefunded: number;
  refundRate: number;
  claimsGranted: number;
  claimsAmount: { amount: number; currencyCode: string };
  shippedProductSales: { amount: number; currencyCode: string };
  unitsShipped: number;
  ordersShipped: number;
  browserSessions: number;
  mobileAppSessions: number;
  sessions: number;
  browserSessionPercentage: number;
  mobileAppSessionPercentage: number;
  sessionPercentage: number;
  browserPageViews: number;
  mobileAppPageViews: number;
  pageViews: number;
  browserPageViewsPercentage: number;
  mobileAppPageViewsPercentage: number;
  pageViewsPercentage: number;
  buyBoxPercentage: number;
  orderItemSessionPercentage: number;
  unitSessionPercentage: number;
}

export interface InventoryItem {
  asin: string;
  fnSku: string;
  sellerSku: string;
  condition: string;
  inventoryDetails: {
    fulfillableQuantity: number;
    inboundWorkingQuantity: number;
    inboundShippedQuantity: number;
    inboundReceivingQuantity: number;
    reservedQuantity: {
      totalReservedQuantity: number;
      pendingCustomerOrderQuantity: number;
      pendingTransshipmentQuantity: number;
      fcProcessingQuantity: number;
    };
    researchingQuantity: { totalResearchingQuantity: number };
    unfulfillableQuantity: {
      totalUnfulfillableQuantity: number;
      customerDamagedQuantity: number;
      warehouseDamagedQuantity: number;
      distributorDamagedQuantity: number;
      carrierDamagedQuantity: number;
      defectiveQuantity: number;
      expiredQuantity: number;
    };
  };
  lastUpdatedTime: string;
  productName: string;
  totalQuantity: number;
}

export interface ListingItem {
  sku: string;
  asin: string;
  status: "ACTIVE" | "INACTIVE" | "INCOMPLETE" | "SUPPRESSED";
  submittedAt: string;
  attributes: Record<string, unknown>;
  issues: Array<{
    code: string;
    message: string;
    severity: "ERROR" | "WARNING" | "INFO";
    attributeNames?: string[];
  }>;
  summaries: Array<{
    marketplaceId: string;
    adultProduct: boolean;
    autoBranded: boolean;
    brandName?: string;
    browseNode?: string;
    color?: string;
    itemName: string;
    itemClassification: string;
    listingDate: string;
    mainImage?: { link: string; height: number; width: number };
    price?: { amount: number; currencyCode: string };
  }>;
}

export interface AmazonOrder {
  amazonOrderId: string;
  purchaseDate: string;
  lastUpdateDate: string;
  orderStatus: string;
  fulfillmentChannel: string;
  salesChannel: string;
  orderTotal?: { currencyCode: string; amount: string };
  numberOfItemsShipped: number;
  numberOfItemsUnshipped: number;
  paymentMethod: string;
  marketplaceId: string;
  shipmentServiceLevelCategory: string;
  orderType: string;
  buyerInfo: { buyerEmail?: string };
}

// ─── Token cache (per store) ──────────────────────────────────────────────────

const _tokenCache = new Map<string, { token: string; expiresAt: number }>();

async function getAccessToken(creds: ResolvedCredentials): Promise<string> {
  const cached = _tokenCache.get(creds.storeId);
  if (cached && Date.now() < cached.expiresAt - 30_000) return cached.token;

  const res = await fetch("https://api.amazon.com/auth/o2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: creds.refreshToken,
      client_id: creds.clientId,
      client_secret: creds.clientSecret,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LWA token refresh failed for store ${creds.storeId}: ${res.status} ${text}`);
  }

  const data = await res.json() as { access_token: string; expires_in: number };
  _tokenCache.set(creds.storeId, {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  });
  return data.access_token;
}

// ─── AWS Signature V4 ─────────────────────────────────────────────────────────

function hmac(key: Buffer | string, data: string): Buffer {
  return crypto.createHmac("sha256", key).update(data).digest();
}

function hash(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function signRequest(
  method: string,
  url: URL,
  body: string,
  accessToken: string
): Record<string, string> {
  const region = process.env.AMAZON_AWS_REGION ?? "us-east-1";
  const service = "execute-api";
  const accessKey = process.env.AMAZON_AWS_ACCESS_KEY!;
  const secretKey = process.env.AMAZON_AWS_SECRET_KEY!;

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "").slice(0, 15) + "Z";
  const dateStamp = amzDate.slice(0, 8);

  const canonicalUri = url.pathname;
  const canonicalQueryString = Array.from(url.searchParams.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

  const payloadHash = hash(body);
  const canonicalHeaders =
    `host:${url.host}\n` +
    `x-amz-access-token:${accessToken}\n` +
    `x-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-access-token;x-amz-date";

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQueryString,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    hash(canonicalRequest),
  ].join("\n");

  const signingKey = hmac(
    hmac(hmac(hmac(`AWS4${secretKey}`, dateStamp), region), service),
    "aws4_request"
  );
  const signature = hmac(signingKey, stringToSign).toString("hex");

  return {
    Authorization: `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
    "x-amz-access-token": accessToken,
    "x-amz-date": amzDate,
    "content-type": "application/json",
  };
}

// ─── Base request ─────────────────────────────────────────────────────────────

const BASE = "https://sellingpartnerapi-na.amazon.com";

async function spRequest<T>(
  creds: ResolvedCredentials,
  path: string,
  params: Record<string, string> = {},
  method = "GET",
  body = ""
): Promise<T> {
  const accessToken = await getAccessToken(creds);
  const url = new URL(BASE + path);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const headers = signRequest(method, url, body, accessToken);

  const res = await fetch(url.toString(), { method, headers, body: body || undefined });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`SP-API ${path} → ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// ─── Public API helpers ───────────────────────────────────────────────────────

export async function getSalesAndTraffic(
  creds: ResolvedCredentials,
  startDate: string,
  endDate: string,
  granularity: "DAY" | "WEEK" | "MONTH" = "DAY"
): Promise<{ salesAndTrafficByDate: SalesSummary[] }> {
  const data = await spRequest<{ payload: { salesAndTrafficByDate: SalesSummary[] } }>(
    creds,
    "/reports/2021-06-30/reports",
    {},
    "POST",
    JSON.stringify({
      reportType: "GET_SALES_AND_TRAFFIC_REPORT",
      dataStartTime: startDate,
      dataEndTime: endDate,
      granularity,
      marketplaceIds: [creds.marketplaceId],
    })
  );
  return data.payload;
}

export async function getFbaInventory(
  creds: ResolvedCredentials,
  skus?: string[]
): Promise<{ inventorySummaries: InventoryItem[] }> {
  const params: Record<string, string> = {
    granularityType: "Marketplace",
    granularityId: creds.marketplaceId,
    marketplaceIds: creds.marketplaceId,
  };
  if (skus?.length) params.sellerSkus = skus.join(",");

  const data = await spRequest<{
    payload: { inventorySummaries: InventoryItem[] };
  }>(creds, "/fba/inventory/v1/summaries", params);
  return data.payload;
}

export async function getListings(
  creds: ResolvedCredentials,
  pageSize = 20
): Promise<{ items: ListingItem[]; pagination?: { nextToken?: string } }> {
  const data = await spRequest<{
    items: ListingItem[];
    pagination?: { nextToken?: string };
  }>(creds, `/listings/2021-08-01/items/${creds.sellerId}`, {
    marketplaceIds: creds.marketplaceId,
    pageSize: String(pageSize),
    includedData: "summaries,attributes,issues",
  });
  return data;
}

export async function getOrders(
  creds: ResolvedCredentials,
  daysBack = 7
): Promise<{ orders: AmazonOrder[] }> {
  const created = new Date(Date.now() - daysBack * 86_400_000).toISOString();
  const data = await spRequest<{ payload: { orders: AmazonOrder[] } }>(
    creds,
    "/orders/v0/orders",
    { MarketplaceIds: creds.marketplaceId, CreatedAfter: created }
  );
  return { orders: data.payload.orders };
}

export async function getProductFeedback(
  creds: ResolvedCredentials
): Promise<Array<{ rating: number; count: number; date: string }>> {
  const data = await spRequest<{ payload: { feedbackList: unknown[] } }>(
    creds,
    "/seller-feedback/2021-06-30/ratings",
    { marketplaceId: creds.marketplaceId }
  );
  return data.payload.feedbackList as Array<{ rating: number; count: number; date: string }>;
}

// ─── Account Health ───────────────────────────────────────────────────────────

export interface AccountHealthResponse {
  healthScore: { status: "GOOD" | "AT_RISK" | "POOR"; value: number };
  performanceMetricGroups: Array<{
    title: string;
    performanceMetrics: Array<{
      title: string;
      value: { displayValue: string };
      threshold: { displayValue: string };
      complianceStatus: "COMPLIANT" | "AT_RISK" | "CRITICAL";
    }>;
  }>;
  suspensionEligibilityStatus: "AT_RISK_OF_SUSPENSION" | "NOT_AT_RISK";
}

export async function getAccountHealth(
  creds: ResolvedCredentials
): Promise<AccountHealthResponse> {
  const data = await spRequest<{ payload: AccountHealthResponse }>(
    creds,
    "/sales/v1/orderMetrics",
    {
      marketplaceIds: creds.marketplaceId,
      interval: `${new Date(Date.now() - 30 * 86_400_000).toISOString()}--${new Date().toISOString()}`,
      granularity: "Total",
    }
  );
  return data.payload;
}

// ─── Performance Notifications ────────────────────────────────────────────────

export interface SPAPINotification {
  notificationId: string;
  notificationType: string;
  payloadVersion: string;
  eventTime: string;
  payload: unknown;
}

export async function getPerformanceNotifications(
  creds: ResolvedCredentials
): Promise<SPAPINotification[]> {
  const data = await spRequest<{ payload: SPAPINotification[] }>(
    creds,
    "/notifications/v1/subscriptions/ACCOUNT_STATUS_CHANGED"
  );
  return data.payload ?? [];
}

// ─── Buyer Messages ───────────────────────────────────────────────────────────

export interface BuyerMessageResponse {
  messages: Array<{ messageId: string; text: string; destinationType: string; createDate: string }>;
}

export async function getBuyerMessages(
  creds: ResolvedCredentials,
  amazonOrderId: string
): Promise<BuyerMessageResponse> {
  const data = await spRequest<{ payload: BuyerMessageResponse }>(
    creds,
    `/messaging/v1/orders/${amazonOrderId}/messages/buyerCustomerService`,
    { marketplaceIds: creds.marketplaceId }
  );
  return data.payload;
}

// ─── Inbound Shipments ────────────────────────────────────────────────────────

export interface InboundShipmentSummary {
  shipmentId: string;
  shipmentName: string;
  shipmentStatus: "WORKING" | "SHIPPED" | "IN_TRANSIT" | "RECEIVING" | "CLOSED" | "CANCELLED" | "DELETED" | "ERROR";
  destinationFulfillmentCenterId: string;
  labelPrepType: string;
  shipFromAddress: { name: string; countryCode: string };
  items?: Array<{ sellerSKU: string; quantityShipped: number; quantityReceived: number }>;
}

export async function getInboundShipments(
  creds: ResolvedCredentials,
  statuses: string[] = ["WORKING", "SHIPPED", "IN_TRANSIT", "RECEIVING"]
): Promise<InboundShipmentSummary[]> {
  const data = await spRequest<{ payload: { ShipmentData: InboundShipmentSummary[] } }>(
    creds,
    "/fba/inbound/v0/shipments",
    { ShipmentStatusList: statuses.join(","), MarketplaceId: creds.marketplaceId }
  );
  return data.payload.ShipmentData ?? [];
}
