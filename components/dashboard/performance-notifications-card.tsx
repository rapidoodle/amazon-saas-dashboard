"use client";

export interface PerformanceNotification {
  id: string;
  type: "WARNING" | "CRITICAL" | "INFO";
  title: string;
  description: string;
  date: string;
  actionRequired: boolean;
}

const typeStyle = {
  CRITICAL: {
    border: "border-red-700",
    bg: "bg-red-900/10",
    dot: "bg-red-400",
    badge: "bg-red-900/40 text-red-400 border border-red-700",
    icon: "text-red-400",
  },
  WARNING: {
    border: "border-yellow-700",
    bg: "bg-yellow-900/10",
    dot: "bg-yellow-400",
    badge: "bg-yellow-900/40 text-yellow-400 border border-yellow-700",
    icon: "text-yellow-400",
  },
  INFO: {
    border: "border-blue-700",
    bg: "bg-blue-900/10",
    dot: "bg-blue-400",
    badge: "bg-blue-900/40 text-blue-400 border border-blue-700",
    icon: "text-blue-400",
  },
};

export function PerformanceNotificationsCard({
  notifications,
}: {
  notifications: PerformanceNotification[];
}) {
  const critical = notifications.filter((n) => n.type === "CRITICAL").length;
  const warnings = notifications.filter((n) => n.type === "WARNING").length;
  const actionNeeded = notifications.filter((n) => n.actionRequired).length;

  return (
    <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-amazon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <h3 className="text-sm font-semibold text-white">Performance Notifications</h3>
        </div>
        {actionNeeded > 0 && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-700">
            {actionNeeded} action{actionNeeded > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Summary pills */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1.5 bg-amazon-navy rounded-lg px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="text-xs text-gray-300">{critical} critical</span>
        </div>
        <div className="flex items-center gap-1.5 bg-amazon-navy rounded-lg px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="text-xs text-gray-300">{warnings} warning{warnings !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Notification list */}
      {notifications.length === 0 ? (
        <div className="flex items-center gap-2 text-xs text-green-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No performance notifications
        </div>
      ) : (
        <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
          {notifications.map((n) => {
            const s = typeStyle[n.type];
            return (
              <div
                key={n.id}
                className={`rounded-lg border ${s.border} ${s.bg} p-3 space-y-1`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full flex-shrink-0 mt-1 ${s.dot}`} />
                    <p className="text-xs font-semibold text-white">{n.title}</p>
                  </div>
                  {n.actionRequired && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${s.badge}`}>
                      Action
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 pl-4">{n.description}</p>
                <p className="text-xs text-gray-600 pl-4">{n.date}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
