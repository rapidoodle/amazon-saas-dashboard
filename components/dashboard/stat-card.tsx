interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
}

export function StatCard({ label, value, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {change !== undefined && (
        <p className={`text-xs mt-1 ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
          {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% vs last month
        </p>
      )}
    </div>
  );
}
