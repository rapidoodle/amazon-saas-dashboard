import { prisma } from "@/lib/db";

export async function getAnalytics() {
  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

  const [
    orders,
    statusCounts,
    topProductItems,
    thisMonthStats,
    lastMonthStats,
    totalCustomers,
    totalProducts,
  ] = await Promise.all([
    // All non-cancelled orders in last 6 months for revenue chart
    prisma.order.findMany({
      where: { createdAt: { gte: sixMonthsAgo }, status: { not: "CANCELLED" } },
      select: { total: true, createdAt: true },
    }),
    // Orders grouped by status
    prisma.order.groupBy({
      by: ["status"],
      _count: { id: true },
    }),
    // Top 5 products by revenue
    prisma.orderItem.groupBy({
      by: ["productId"],
      _sum: { price: true },
      _count: { id: true },
      orderBy: { _sum: { price: "desc" } },
      take: 5,
    }),
    // This month aggregates
    prisma.order.aggregate({
      where: { createdAt: { gte: thisMonth }, status: { not: "CANCELLED" } },
      _sum: { total: true },
      _count: { id: true },
    }),
    // Last month aggregates
    prisma.order.aggregate({
      where: { createdAt: { gte: lastMonth, lt: thisMonth }, status: { not: "CANCELLED" } },
      _sum: { total: true },
      _count: { id: true },
    }),
    prisma.customer.count(),
    prisma.product.count(),
  ]);

  // Build revenue chart data (last 6 months)
  const monthMap: Record<string, { revenue: number; orders: number }> = {};
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = d.toLocaleString("en-US", { month: "short", year: "numeric" });
    monthMap[key] = { revenue: 0, orders: 0 };
  }
  for (const order of orders) {
    const key = new Date(order.createdAt).toLocaleString("en-US", { month: "short", year: "numeric" });
    if (monthMap[key]) {
      monthMap[key].revenue += order.total;
      monthMap[key].orders += 1;
    }
  }
  const revenueData = Object.entries(monthMap).map(([month, data]) => ({
    month,
    revenue: Math.round(data.revenue),
    orders: data.orders,
  }));

  // Orders by status
  const ordersByStatus = statusCounts.map((s) => ({
    status: s.status,
    count: s._count.id,
  }));

  // Top products — resolve names
  const productIds = topProductItems.map((p) => p.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true },
  });
  const productMap = Object.fromEntries(products.map((p) => [p.id, p.name]));

  const topProducts = topProductItems.map((p) => ({
    name: productMap[p.productId] ?? p.productId,
    sales: p._count.id,
    revenue: Math.round((p._sum.price ?? 0) * 100) / 100,
  }));

  return {
    revenueData,
    ordersByStatus,
    topProducts,
    stats: {
      totalRevenue: Math.round(thisMonthStats._sum.total ?? 0),
      totalOrders: thisMonthStats._count.id,
      totalCustomers,
      totalProducts,
      prevRevenue: Math.round(lastMonthStats._sum.total ?? 0),
      prevOrders: lastMonthStats._count.id,
    },
  };
}

export type AnalyticsData = Awaited<ReturnType<typeof getAnalytics>>;
