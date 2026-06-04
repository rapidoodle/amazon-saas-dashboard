"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { OrderStatusBadge } from "@/components/ui/badge";
import { Modal, ConfirmModal } from "@/components/ui/modal";
import { hasPermission } from "@/lib/permissions";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

const ORDER_STATUSES = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];

interface Order {
  id: string;
  status: string;
  total: number;
  notes?: string;
  createdAt: string;
  customer: { id: string; name: string; email: string };
  items: { id: string; quantity: number; price: number; product: { name: string } }[];
}

export default function OrdersPage() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const [orders, setOrders] = useState<Order[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 300);

  const [editOrder, setEditOrder] = useState<Order | null>(null);
  const [editStatus, setEditStatus] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "15" });
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (statusFilter) params.set("status", statusFilter);
    const res = await fetch(`/api/orders?${params}`);
    const data = await res.json();
    setOrders(data.orders ?? []);
    setTotal(data.total ?? 0);
    setLoading(false);
  }, [page, debouncedSearch, statusFilter]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  async function handleEdit() {
    if (!editOrder) return;
    setEditLoading(true);
    await fetch(`/api/orders/${editOrder.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: editStatus, notes: editNotes }),
    });
    setEditLoading(false);
    setEditOrder(null);
    fetchOrders();
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleteLoading(true);
    await fetch(`/api/orders/${deleteId}`, { method: "DELETE" });
    setDeleteLoading(false);
    setDeleteId(null);
    fetchOrders();
  }

  const canEdit = role && hasPermission(role, "orders:update");
  const canDelete = role && hasPermission(role, "orders:delete");
  const totalPages = Math.ceil(total / 15);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Orders" />
      <main className="flex-1 overflow-y-auto p-6">
        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <Input
            placeholder="Search by customer or order ID…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}

            className="max-w-xs"
          />
          <Select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="w-40"
          >
            <option value="">All statuses</option>
            {ORDER_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Order ID", "Customer", "Status", "Items", "Total", "Date", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">Loading…</td></tr>
                ) : orders.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">No orders found</td></tr>
                ) : orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{order.id.slice(0, 8)}…</td>
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">{order.customer.name}</p>
                      <p className="text-xs text-gray-400">{order.customer.email}</p>
                    </td>
                    <td className="px-4 py-3"><OrderStatusBadge status={order.status} /></td>
                    <td className="px-4 py-3 text-sm text-gray-600">{order.items.length} item(s)</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{formatCurrency(order.total)}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{formatDate(order.createdAt)}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {canEdit && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => { setEditOrder(order); setEditStatus(order.status); setEditNotes(order.notes ?? ""); }}
                        >
                          Edit
                        </Button>
                      )}
                      {canDelete && (
                        <Button variant="ghost" size="sm" className="text-red-500" onClick={() => setDeleteId(order.id)}>
                          Delete
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-500">Showing {orders.length} of {total} orders</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
                <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Edit Modal */}
      <Modal isOpen={!!editOrder} onClose={() => setEditOrder(null)} title="Update order">
        <div className="space-y-4">
          <Select label="Status" value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
            {ORDER_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              rows={3}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setEditOrder(null)}>Cancel</Button>
            <Button onClick={handleEdit} loading={editLoading}>Save</Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete order"
        message="This will permanently delete the order and its items. This action cannot be undone."
        loading={deleteLoading}
      />
    </div>
  );
}
