import { Header } from "@/components/layout/header";
import { StatCardSkeleton, ChartSkeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ChartSkeleton height={260} />
          </div>
          <ChartSkeleton height={260} />
        </div>
        <ChartSkeleton height={260} />
      </main>
    </div>
  );
}
