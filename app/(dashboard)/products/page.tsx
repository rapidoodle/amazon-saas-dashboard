"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useDebounce } from "@/hooks/use-debounce";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ConfirmModal } from "@/components/ui/modal";
import { hasPermission } from "@/lib/permissions";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category?: string;
  createdAt: string;
}

interface ProductForm {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
}

const emptyForm: ProductForm = { name: "", description: "", price: "", stock: "0", category: "" };

export default function ProductsPage() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 300);

  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "15" });
    if (debouncedSearch) params.set("search", debouncedSearch);
    const res = await fetch(`/api/products?${params}`);
    const data = await res.json();
    setProducts(data.products ?? []);
    setTotal(data.total ?? 0);
    setLoading(false);
  }, [page, debouncedSearch]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  function openCreate() {
    setEditProduct(null);
    setForm(emptyForm);
    setFormError("");
    setShowModal(true);
  }

  function openEdit(product: Product) {
    setEditProduct(product);
    setForm({
      name: product.name,
      description: product.description ?? "",
      price: String(product.price),
      stock: String(product.stock),
      category: product.category ?? "",
    });
    setFormError("");
    setShowModal(true);
  }

  async function handleSave() {
    setSaving(true);
    setFormError("");
    const payload = {
      name: form.name,
      description: form.description || undefined,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      category: form.category || undefined,
    };

    const res = await fetch(editProduct ? `/api/products/${editProduct.id}` : "/api/products", {
      method: editProduct ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    if (!res.ok) {
      const err = await res.json();
      setFormError(err.error?.formErrors?.[0] ?? "Something went wrong");
      return;
    }
    setShowModal(false);
    fetchProducts();
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleteLoading(true);
    await fetch(`/api/products/${deleteId}`, { method: "DELETE" });
    setDeleteLoading(false);
    setDeleteId(null);
    fetchProducts();
  }

  const canCreate = role && hasPermission(role, "products:create");
  const canEdit = role && hasPermission(role, "products:update");
  const canDelete = role && hasPermission(role, "products:delete");
  const totalPages = Math.ceil(total / 15);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Products" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <Input
            placeholder="Search products…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="max-w-xs"
          />
          {canCreate && <Button onClick={openCreate}>+ Add product</Button>}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Name", "Category", "Price", "Stock", "Added", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">Loading…</td></tr>
                ) : products.length === 0 ? (
                  <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">No products found</td></tr>
                ) : products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">{p.name}</p>
                      {p.description && <p className="text-xs text-gray-400 truncate max-w-xs">{p.description}</p>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{p.category ?? "—"}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{formatCurrency(p.price)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-sm font-medium ${p.stock < 10 ? "text-red-600" : "text-gray-900"}`}>
                        {p.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{formatDate(p.createdAt)}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {canEdit && <Button variant="ghost" size="sm" onClick={() => openEdit(p)}>Edit</Button>}
                      {canDelete && <Button variant="ghost" size="sm" className="text-red-500" onClick={() => setDeleteId(p.id)}>Delete</Button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-500">Showing {products.length} of {total}</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
                <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editProduct ? "Edit product" : "Add product"}>
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Price ($)" type="number" step="0.01" min="0" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
            <Input label="Stock" type="number" min="0" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required />
          </div>
          <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
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
        title="Delete product"
        message="This will permanently delete this product. This action cannot be undone."
        loading={deleteLoading}
      />
    </div>
  );
}
