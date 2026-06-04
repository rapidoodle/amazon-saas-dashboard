import { Header } from "@/components/layout/header";
import { TableSkeleton } from "@/components/ui/skeleton";

export default function CustomersLoading() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Customers" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="h-9 w-72 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-9 w-36 animate-pulse rounded-lg bg-gray-200" />
        </div>
        <TableSkeleton rows={10} />
      </main>
    </div>
  );
}
