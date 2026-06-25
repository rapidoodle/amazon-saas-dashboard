"use client";

export interface AccountHealthData {
  score: number; // 0–200, Amazon's scale
  status: "GOOD" | "AT_RISK" | "POOR";
  metrics: {
    label: string;
    value: string;
    threshold: string;
    status: "OK" | "WARNING" | "VIOLATION";
  }[];
  policyViolations: { title: string; impact: "HIGH" | "MEDIUM" | "LOW" }[];
}

const scoreColor = {
  GOOD: "text-green-400",
  AT_RISK: "text-yellow-400",
  POOR: "text-red-400",
};

const scoreBg = {
  GOOD: "border-green-700 bg-green-900/20",
  AT_RISK: "border-yellow-700 bg-yellow-900/20",
  POOR: "border-red-700 bg-red-900/20",
};

const metricDot = {
  OK: "bg-green-400",
  WARNING: "bg-yellow-400",
  VIOLATION: "bg-red-400",
};

const impactBadge = {
  HIGH: "bg-red-900/40 text-red-400 border border-red-700",
  MEDIUM: "bg-yellow-900/40 text-yellow-400 border border-yellow-700",
  LOW: "bg-blue-900/40 text-blue-400 border border-blue-700",
};

export function AccountHealthCard({ data }: { data: AccountHealthData }) {
  return (
    <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-amazon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h3 className="text-sm font-semibold text-white">Account Health</h3>
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${scoreBg[data.status]} ${scoreColor[data.status]}`}>
          {data.status}
        </span>
      </div>

      {/* Score */}
      <div className="flex items-end gap-2">
        <span className={`text-3xl font-bold ${scoreColor[data.status]}`}>{data.score}</span>
        <span className="text-xs text-gray-500 mb-1">/ 200</span>
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        {data.metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full flex-shrink-0 ${metricDot[m.status]}`} />
              <span className="text-gray-400">{m.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">{m.value}</span>
              <span className="text-gray-600">/ {m.threshold}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Violations */}
      {data.policyViolations.length > 0 && (
        <div className="pt-3 border-t border-amazon-navy-light space-y-1.5">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Policy Violations</p>
          {data.policyViolations.map((v) => (
            <div key={v.title} className="flex items-center justify-between gap-2">
              <span className="text-xs text-gray-300 truncate">{v.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${impactBadge[v.impact]}`}>
                {v.impact}
              </span>
            </div>
          ))}
        </div>
      )}

      {data.policyViolations.length === 0 && (
        <div className="flex items-center gap-2 text-xs text-green-400 pt-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No policy violations
        </div>
      )}
    </div>
  );
}
