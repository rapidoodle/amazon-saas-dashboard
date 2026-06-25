"use client";

export interface InboundShipment {
  shipmentId: string;
  name: string;
  status: "WORKING" | "SHIPPED" | "IN_TRANSIT" | "RECEIVING" | "CLOSED" | "CANCELLED" | "DELETED" | "ERROR";
  destination: string;
  itemCount: number;
  receivedCount: number;
  issues: {
    type: "MISSING" | "DAMAGED" | "UNEXPECTED" | "MISLABELED" | "DEFECTIVE";
    count: number;
    skus: string[];
  }[];
  estimatedArrival?: string;
  lastUpdated: string;
}

const statusStyle: Record<string, { label: string; color: string }> = {
  WORKING:    { label: "Working",    color: "text-gray-400" },
  SHIPPED:    { label: "Shipped",    color: "text-blue-400" },
  IN_TRANSIT: { label: "In Transit", color: "text-blue-400" },
  RECEIVING:  { label: "Receiving",  color: "text-amazon-orange" },
  CLOSED:     { label: "Closed",     color: "text-green-400" },
  CANCELLED:  { label: "Cancelled",  color: "text-gray-500" },
  DELETED:    { label: "Deleted",    color: "text-gray-500" },
  ERROR:      { label: "Error",      color: "text-red-400" },
};

const issueStyle: Record<string, { label: string; color: string }> = {
  MISSING:    { label: "Missing",    color: "text-red-400" },
  DAMAGED:    { label: "Damaged",    color: "text-red-400" },
  UNEXPECTED: { label: "Unexpected", color: "text-yellow-400" },
  MISLABELED: { label: "Mislabeled", color: "text-yellow-400" },
  DEFECTIVE:  { label: "Defective",  color: "text-orange-400" },
};

export function InboundPerformanceCard({ shipments }: { shipments: InboundShipment[] }) {
  const active = shipments.filter((s) =>
    ["WORKING", "SHIPPED", "IN_TRANSIT", "RECEIVING"].includes(s.status)
  ).length;

  const withIssues = shipments.filter((s) => s.issues.length > 0).length;
  const totalIssues = shipments.reduce((sum, s) => sum + s.issues.reduce((si, i) => si + i.count, 0), 0);

  return (
    <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-amazon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          <h3 className="text-sm font-semibold text-white">Inbound Performance</h3>
        </div>
        {withIssues > 0 && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-900/40 text-yellow-400 border border-yellow-700">
            {totalIssues} issue{totalIssues !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Summary */}
      <div className="flex gap-2 text-xs">
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-blue-400 font-bold text-lg">{active}</p>
          <p className="text-gray-500">Active</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className={`font-bold text-lg ${withIssues > 0 ? "text-yellow-400" : "text-green-400"}`}>
            {withIssues}
          </p>
          <p className="text-gray-500">With Issues</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-gray-300 font-bold text-lg">{shipments.length}</p>
          <p className="text-gray-500">Total</p>
        </div>
      </div>

      {/* Shipment list */}
      {shipments.length === 0 ? (
        <div className="flex items-center gap-2 text-xs text-green-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No active inbound shipments
        </div>
      ) : (
        <div className="space-y-2 max-h-52 overflow-y-auto scrollbar-hide">
          {shipments
            .sort((a, b) => (a.issues.length > 0 ? -1 : b.issues.length > 0 ? 1 : 0))
            .map((s) => {
              const st = statusStyle[s.status] ?? { label: s.status, color: "text-gray-400" };
              const pct = s.itemCount > 0
                ? Math.round((s.receivedCount / s.itemCount) * 100)
                : 0;

              return (
                <div
                  key={s.shipmentId}
                  className="rounded-lg border border-amazon-navy-light bg-amazon-navy p-3 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-white">{s.name}</p>
                      <p className="text-xs text-gray-500 font-mono">{s.shipmentId}</p>
                    </div>
                    <span className={`text-xs font-semibold flex-shrink-0 ${st.color}`}>
                      {st.label}
                    </span>
                  </div>

                  {/* Progress bar */}
                  {s.status === "RECEIVING" && (
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{s.receivedCount} / {s.itemCount} received</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-amazon-navy-light rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amazon-orange rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {s.estimatedArrival && s.status === "IN_TRANSIT" && (
                    <p className="text-xs text-blue-400">ETA: {s.estimatedArrival}</p>
                  )}

                  {/* Issues */}
                  {s.issues.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {s.issues.map((issue) => {
                        const is = issueStyle[issue.type];
                        return (
                          <span
                            key={issue.type}
                            className={`text-xs font-medium ${is.color}`}
                          >
                            {issue.count}× {is.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
