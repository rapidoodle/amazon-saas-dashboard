"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useDebounce } from "@/hooks/use-debounce";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ConfirmModal } from "@/components/ui/modal";
import { hasPermission } from "@/lib/permissions";
import { formatDate } from "@/lib/utils";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  createdAt: string;
  _count: { orders: number };
}

interface CustomerForm {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
}

const emptyForm: CustomerForm = { name: "", email: "", phone: "", city: "", country: "" };

export default function CustomersPage() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 300);

  const [showModal, setShowModal] = useState(false);
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [form, setForm] = useState<CustomerForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "15" });
    if (debouncedSearch) params.set("search", debouncedSearch);
    const res = await fetch(`/api/customers?${params}`);
    const data = await res.json();
    setCustomers(data.customers ?? []);
    setTotal(data.total ?? 0);
    setLoading(false);
  }, [page, debouncedSearch]);

  useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

  function openCreate() {
    setEditCustomer(null);
    setForm(emptyForm);
    setFormError("");
    setShowModal(true);
  }

  function openEdit(c: Customer) {
    setEditCustomer(c);
    setForm({ name: c.name, email: c.email, phone: c.phone ?? "", city: c.city ?? "", country: c.country ?? "" });
    setFormError("");
    setShowModal(true);
  }

  async function handleSave() {
    setSaving(true);
    setFormError("");
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      city: form.city || undefined,
      country: form.country || undefined,
    };

    const res = await fetch(editCustomer ? `/api/customers/${editCustomer.id}` : "/api/customers", {
      method: editCustomer ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    if (!res.ok) {
      const err = await res.json();
      setFormError(err.error ?? "Something went wrong");
      return;
    }
    setShowModal(false);
    fetchCustomers();
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleteLoading(true);
    await fetch(`/api/customers/${deleteId}`, { method: "DELETE" });
    setDeleteLoading(false);
    setDeleteId(null);
    fetchCustomers();
  }

  const canCreate = role && hasPermission(role, "customers:create");
  const canEdit = role && hasPermission(role, "customers:update");
  const canDelete = role && hasPermission(role, "customers:delete");
  const totalPages = Math.ceil(total / 15);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Customers" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <Input
            placeholder="Search customers…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="max-w-xs"
          />
          {canCreate && <Button onClick={openCreate}>+ Add customer</Button>}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Name", "Email", "Phone", "Location", "Orders", "Joined", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">Loading…</td></tr>
                ) : customers.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">No customers found</td></tr>
                ) : customers.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{c.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{c.phone ?? "—"}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{[c.city, c.country].filter(Boolean).join(", ") || "—"}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{c._count.orders}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{formatDate(c.createdAt)}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {canEdit && <Button variant="ghost" size="sm" onClick={() => openEdit(c)}>Edit</Button>}
                      {canDelete && <Button variant="ghost" size="sm" className="text-red-500" onClick={() => setDeleteId(c.id)}>Delete</Button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-500">Showing {customers.length} of {total}</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
                <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editCustomer ? "Edit customer" : "Add customer"}>
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            <Input label="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          </div>
          {formError && <p className="text-sm text-red-600">{formError}</p>}
          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={handleSave} loading={saving}>Save</Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete customer"
        message="This will permanently delete this customer and all their orders. This action cannot be undone."
        loading={deleteLoading}
      />
    </div>
  );
}
