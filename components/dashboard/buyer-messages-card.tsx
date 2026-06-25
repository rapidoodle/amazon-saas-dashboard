"use client";

export interface BuyerMessage {
  id: string;
  orderId: string;
  subject: string;
  preview: string;
  receivedAt: string;
  hoursAgo: number;
  isRead: boolean;
  requiresResponse: boolean;
  responseDeadlineHours: number; // Amazon's 24h window
}

function urgencyColor(hoursAgo: number, deadlineHours: number): string {
  const remaining = deadlineHours - hoursAgo;
  if (remaining <= 4) return "text-red-400";
  if (remaining <= 12) return "text-yellow-400";
  return "text-gray-400";
}

function urgencyLabel(hoursAgo: number, deadlineHours: number): string {
  const remaining = deadlineHours - hoursAgo;
  if (remaining <= 0) return "OVERDUE";
  if (remaining <= 4) return `${remaining}h left`;
  if (remaining <= 12) return `${remaining}h left`;
  return `${remaining}h left`;
}

export function BuyerMessagesCard({ messages }: { messages: BuyerMessage[] }) {
  const unread = messages.filter((m) => !m.isRead).length;
  const needsReply = messages.filter((m) => m.requiresResponse).length;
  const overdue = messages.filter(
    (m) => m.requiresResponse && m.hoursAgo >= m.responseDeadlineHours
  ).length;

  return (
    <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-amazon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 className="text-sm font-semibold text-white">Buyer Messages</h3>
        </div>
        {overdue > 0 && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-700">
            {overdue} overdue
          </span>
        )}
      </div>

      {/* Summary */}
      <div className="flex gap-2 text-xs">
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className="text-white font-bold text-lg">{unread}</p>
          <p className="text-gray-500">Unread</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className={`font-bold text-lg ${needsReply > 0 ? "text-amazon-orange" : "text-green-400"}`}>
            {needsReply}
          </p>
          <p className="text-gray-500">Need Reply</p>
        </div>
        <div className="flex-1 bg-amazon-navy rounded-lg px-3 py-2 text-center">
          <p className={`font-bold text-lg ${overdue > 0 ? "text-red-400" : "text-green-400"}`}>
            {overdue}
          </p>
          <p className="text-gray-500">Overdue</p>
        </div>
      </div>

      {/* Amazon response time notice */}
      <div className="flex items-start gap-2 bg-amazon-navy rounded-lg px-3 py-2">
        <svg className="h-3.5 w-3.5 text-amazon-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-xs text-gray-400">Amazon requires responses within <span className="text-amazon-orange font-semibold">24 hours</span>. Late responses affect your metrics.</p>
      </div>

      {/* Message list */}
      {messages.length === 0 ? (
        <div className="flex items-center gap-2 text-xs text-green-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No pending messages
        </div>
      ) : (
        <div className="space-y-2 max-h-52 overflow-y-auto scrollbar-hide">
          {messages
            .sort((a, b) => {
              const aRemain = a.responseDeadlineHours - a.hoursAgo;
              const bRemain = b.responseDeadlineHours - b.hoursAgo;
              return aRemain - bRemain;
            })
            .map((m) => (
              <div
                key={m.id}
                className={`rounded-lg border p-3 space-y-1.5 ${
                  !m.isRead
                    ? "border-amazon-orange/30 bg-amazon-orange/5"
                    : "border-amazon-navy-light bg-amazon-navy"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    {!m.isRead && (
                      <span className="h-2 w-2 rounded-full bg-amazon-orange flex-shrink-0 mt-1.5" />
                    )}
                    <p className={`text-xs font-medium ${!m.isRead ? "text-white" : "text-gray-300"} line-clamp-1`}>
                      {m.subject}
                    </p>
                  </div>
                  {m.requiresResponse && (
                    <span className={`text-xs font-semibold flex-shrink-0 ${urgencyColor(m.hoursAgo, m.responseDeadlineHours)}`}>
                      {urgencyLabel(m.hoursAgo, m.responseDeadlineHours)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 pl-4">{m.preview}</p>
                <div className="flex items-center justify-between pl-4">
                  <span className="text-xs font-mono text-gray-600">#{m.orderId}</span>
                  <span className="text-xs text-gray-600">{m.receivedAt}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
