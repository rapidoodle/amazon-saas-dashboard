import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAnalytics } from "@/lib/analytics";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { OrdersChart } from "@/components/charts/orders-chart";
import { TopProductsChart } from "@/components/charts/top-products-chart";
import { formatCurrency, percentChange } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const [session, analytics] = await Promise.all([
    getServerSession(authOptions),
    getAnalytics(),
  ]);

  const { stats, revenueData, ordersByStatus, topProducts } = analytics;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Dashboard" />

      {searchParams.error === "forbidden" && (
        <div className="mx-6 mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          You don&apos;t have permission to access that page.
        </div>
      )}

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Revenue (this month)"
            value={formatCurrency(stats.totalRevenue)}
            change={percentChange(stats.totalRevenue, stats.prevRevenue)}
          />
          <StatCard
            label="Orders (this month)"
            value={stats.totalOrders}
            change={percentChange(stats.totalOrders, stats.prevOrders)}
          />
          <StatCard label="Total customers" value={stats.totalCustomers} />
          <StatCard label="Total products" value={stats.totalProducts} />
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RevenueChart data={revenueData} />
          </div>
          <OrdersChart data={ordersByStatus} />
        </div>

        {/* Charts row 2 */}
        <TopProductsChart data={topProducts} />
      </main>
    </div>
  );
}
