"use client";

export interface SupportCase {
  id: string;
  subject: string;
  status: "OPEN" | "PENDING_SELLER" | "PENDING_AMAZON" | "RESOLVED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  createdAt: string;
  lastUpdated: string;
  category: string;
}

const statusStyle: Record<string, string> = {
  OPEN: "bg-red-900/40 text-red-400 border border-red-700",
  PENDING_SELLER: "bg-amazon-orange/20 text-amazon-orange border border-amazon-orange/40",
  PENDING_AMAZON: "bg-blue-900/40 text-blue-400 border border-blue-700",
  RESOLVED: "bg-green-900/40 text-green-400 border border-green-700",
};

const statusLabel: Record<string, string> = {
  OPEN: "Open",
  PENDING_SELLER: "Needs You",
  PENDING_AMAZON: "With Amazon",
  RESOLVED: "Resolved",
};

const priorityDot: Record<string, string> = {
  HIGH: "bg-red-400",
  MEDIUM: "bg-yellow-400",
  LOW: "bg-gray-400",
};

export function OpenCasesCard({ cases }: { cases: SupportCase[] }) {
  const needsAction = cases.filter((c) => c.status === "PENDING_SELLER").length;
  const open = cases.filter((c) => c.status === "OPEN").length;

  return (
    <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-amazon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <h3 className="text-sm font-semibold text-white">Open Cases</h3>
        </div>
        <div className="flex items-center gap-2">
          {needsAction > 0 && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amazon-orange/20 text-amazon-orange border border-amazon-orange/40">
              {needsAction} need{needsAction > 1 ? "" : "s"} reply
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="flex gap-2 text-xs">
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-red-400 font-bold text-lg">{open}</p>
          <p className="text-gray-500">Open</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-amazon-orange font-bold text-lg">{needsAction}</p>
          <p className="text-gray-500">Need Reply</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-gray-300 font-bold text-lg">{cases.length}</p>
          <p className="text-gray-500">Total</p>
        </div>
      </div>

      {/* Case list */}
      {cases.length === 0 ? (
        <div className="flex items-center gap-2 text-xs text-green-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No open cases
        </div>
      ) : (
        <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
          {cases
            .sort((a, b) => (a.status === "PENDING_SELLER" ? -1 : b.status === "PENDING_SELLER" ? 1 : 0))
            .map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-amazon-navy-light bg-amazon-navy p-3 space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <span className={`h-2 w-2 rounded-full flex-shrink-0 mt-1.5 ${priorityDot[c.priority]}`} />
                    <p className="text-xs font-medium text-white line-clamp-2">{c.subject}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${statusStyle[c.status]}`}>
                    {statusLabel[c.status]}
                  </span>
                </div>
                <div className="flex items-center justify-between pl-4">
                  <span className="text-xs text-gray-500">{c.category}</span>
                  <span className="text-xs text-gray-600">Updated {c.lastUpdated}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
