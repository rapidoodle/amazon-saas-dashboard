import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAnalytics } from "@/lib/analytics";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { TopProductsChart } from "@/components/charts/top-products-chart";
import { DailyReviewAlert } from "@/components/dashboard/daily-review-alert";
import { AccountHealthCard, type AccountHealthData } from "@/components/dashboard/account-health-card";
import { PerformanceNotificationsCard, type PerformanceNotification } from "@/components/dashboard/performance-notifications-card";
import { OpenCasesCard, type SupportCase } from "@/components/dashboard/open-cases-card";
import { BuyerMessagesCard, type BuyerMessage } from "@/components/dashboard/buyer-messages-card";
import { InboundPerformanceCard, type InboundShipment } from "@/components/dashboard/inbound-performance-card";
import { formatCurrency, percentChange } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const [, analytics] = await Promise.all([
    getServerSession(authOptions),
    getAnalytics(),
  ]);

  const { stats, revenueData, ordersByStatus, topProducts } = analytics;

  const sessionCount = Math.floor(stats.totalOrders * 18.5);
  const conversionRate = ((stats.totalOrders / sessionCount) * 100).toFixed(1);

  // ── DR Check mock data (replace with SP-API calls once env vars are set) ──

  const accountHealth: AccountHealthData = {
    score: 178,
    status: "GOOD",
    metrics: [
      { label: "Order Defect Rate", value: "0.12%", threshold: "< 1%", status: "OK" },
      { label: "Late Shipment Rate", value: "1.8%", threshold: "< 4%", status: "OK" },
      { label: "Pre-fulfillment Cancel", value: "0.5%", threshold: "< 2.5%", status: "OK" },
      { label: "Valid Tracking Rate", value: "97.3%", threshold: "> 95%", status: "OK" },
      { label: "Invoice Defect Rate", value: "0.0%", threshold: "< 5%", status: "OK" },
    ],
    policyViolations: [],
  };

  const performanceNotifications: PerformanceNotification[] = [
    {
      id: "pn-1",
      type: "WARNING",
      title: "Late Shipment Rate approaching threshold",
      description: "Your late shipment rate is 1.8%. Sustained rates above 4% may affect account standing.",
      date: "2026-06-24",
      actionRequired: false,
    },
    {
      id: "pn-2",
      type: "INFO",
      title: "New FBA storage fee policy effective July 1",
      description: "Amazon is updating aged inventory surcharge calculations. Review your IPI score.",
      date: "2026-06-23",
      actionRequired: false,
    },
  ];

  const openCases: SupportCase[] = [
    {
      id: "CASE-00123456",
      subject: "FBA shipment FBA15XYZ123 — 4 units missing after receiving",
      status: "PENDING_SELLER",
      priority: "HIGH",
      createdAt: "2026-06-20",
      lastUpdated: "2026-06-24",
      category: "FBA Issue",
    },
    {
      id: "CASE-00123457",
      subject: "Listing B08XYZ9012 suppressed — safety compliance",
      status: "OPEN",
      priority: "HIGH",
      createdAt: "2026-06-22",
      lastUpdated: "2026-06-22",
      category: "Listing Issue",
    },
    {
      id: "CASE-00123458",
      subject: "Reimbursement request for damaged return #114-123456",
      status: "PENDING_AMAZON",
      priority: "MEDIUM",
      createdAt: "2026-06-18",
      lastUpdated: "2026-06-23",
      category: "Reimbursement",
    },
  ];

  const buyerMessages: BuyerMessage[] = [
    {
      id: "msg-1",
      orderId: "114-1234567-8901234",
      subject: "Where is my order?",
      preview: "Hi, I ordered 5 days ago and the tracking hasn't updated since the 20th.",
      receivedAt: "2026-06-25 08:14 AM",
      hoursAgo: 3,
      isRead: false,
      requiresResponse: true,
      responseDeadlineHours: 24,
    },
    {
      id: "msg-2",
      orderId: "114-9876543-2109876",
      subject: "Wrong item received",
      preview: "I received a black unit but ordered the white one. Can you help?",
      receivedAt: "2026-06-24 10:30 PM",
      hoursAgo: 15,
      isRead: false,
      requiresResponse: true,
      responseDeadlineHours: 24,
    },
    {
      id: "msg-3",
      orderId: "114-5555555-6666666",
      subject: "Thank you!",
      preview: "Just wanted to say the product is great. Very happy with my purchase.",
      receivedAt: "2026-06-24 03:00 PM",
      hoursAgo: 22,
      isRead: true,
      requiresResponse: false,
      responseDeadlineHours: 24,
    },
  ];

  const inboundShipments: InboundShipment[] = [
    {
      shipmentId: "FBA15XYZ001",
      name: "Restock June W3 — Headphones",
      status: "RECEIVING",
      destination: "PHX7",
      itemCount: 200,
      receivedCount: 148,
      issues: [
        { type: "MISSING", count: 4, skus: ["SKU-001"] },
      ],
      lastUpdated: "2026-06-25",
    },
    {
      shipmentId: "FBA15XYZ002",
      name: "Restock June W3 — Cables",
      status: "IN_TRANSIT",
      destination: "ONT8",
      itemCount: 500,
      receivedCount: 0,
      issues: [],
      estimatedArrival: "2026-06-27",
      lastUpdated: "2026-06-24",
    },
    {
      shipmentId: "FBA15XYZ003",
      name: "Restock June W2 — Stands",
      status: "CLOSED",
      destination: "MDW2",
      itemCount: 150,
      receivedCount: 147,
      issues: [
        { type: "DAMAGED", count: 3, skus: ["SKU-004"] },
      ],
      lastUpdated: "2026-06-22",
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Daily Review" subtitle="Amazon Seller Central — Today's snapshot" />

      {searchParams.error === "forbidden" && (
        <div className="mx-6 mt-4 rounded-lg bg-red-900/40 border border-red-700 px-4 py-3 text-sm text-red-300">
          You don&apos;t have permission to access that page.
        </div>
      )}

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <DailyReviewAlert />

        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard
            label="Revenue Today"
            value={formatCurrency(stats.totalRevenue)}
            change={percentChange(stats.totalRevenue, stats.prevRevenue)}
            accent
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            label="Units Ordered"
            value={(stats.totalOrders * 2).toLocaleString()}
            change={percentChange(stats.totalOrders, stats.prevOrders)}
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
          <StatCard
            label="Sessions"
            value={sessionCount.toLocaleString()}
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
          <StatCard
            label="Unit Session %"
            value={`${conversionRate}%`}
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <StatCard
            label="Buy Box %"
            value="87.3%"
            change={1.2}
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RevenueChart data={revenueData} title="Revenue & Orders (30 days)" />
          </div>

          {/* Order status + DR checklist */}
          <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-6">
            <h3 className="text-base font-semibold text-white mb-4">Order Status</h3>
            <div className="space-y-2.5">
              {ordersByStatus.map(
                (item: { status: string; count: number }) => {
                  const colorMap: Record<string, string> = {
                    PENDING: "#FF9900",
                    PROCESSING: "#60A5FA",
                    SHIPPED: "#34D399",
                    DELIVERED: "#22C55E",
                    CANCELLED: "#F87171",
                  };
                  const color = colorMap[item.status] ?? "#9CA3AF";
                  return (
                  <div key={item.status} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm text-gray-300 capitalize">
                        {item.status.toLowerCase()}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-white">{item.count}</span>
                  </div>
                  );
                }
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-amazon-navy-light">
              <p className="text-xs font-semibold text-amazon-orange uppercase tracking-wide mb-3">
                DR Checklist
              </p>
              <div className="space-y-2">
                {[
                  { label: "Check pending orders", done: true },
                  { label: "Review buyer messages", done: false },
                  { label: "Check account health", done: true },
                  { label: "Review performance notifications", done: false },
                  { label: "Resolve open cases", done: false },
                  { label: "Check inbound shipments", done: true },
                  { label: "Review inventory alerts", done: false },
                  { label: "Check suppressed listings", done: false },
                  { label: "Monitor Buy Box", done: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span
                      className={`h-4 w-4 rounded border flex-shrink-0 flex items-center justify-center ${
                        item.done
                          ? "bg-amazon-orange border-amazon-orange"
                          : "border-amazon-navy-light"
                      }`}
                    >
                      {item.done && (
                        <svg className="h-2.5 w-2.5 text-amazon-navy" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10.28 1.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-8a1 1 0 00-1.414-1.414z" />
                        </svg>
                      )}
                    </span>
                    <span className={`text-xs ${item.done ? "line-through text-gray-500" : "text-gray-300"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DR Checks — 5 key areas */}
        <div>
          <h2 className="text-sm font-semibold text-amazon-orange uppercase tracking-wide mb-3 flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 3h6m-6 4h6m-6 4h6" />
            </svg>
            Daily Review Checks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <AccountHealthCard data={accountHealth} />
            <PerformanceNotificationsCard notifications={performanceNotifications} />
            <OpenCasesCard cases={openCases} />
            <BuyerMessagesCard messages={buyerMessages} />
            <InboundPerformanceCard shipments={inboundShipments} />
          </div>
        </div>

        {/* Top ASINs */}
        <TopProductsChart data={topProducts} />
      </main>
    </div>
  );
}
