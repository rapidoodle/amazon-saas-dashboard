import { describe, it, expect } from "vitest";
import { hasPermission, PERMISSIONS } from "@/lib/permissions";
import { Role } from "@prisma/client";

describe("hasPermission", () => {
  describe("ADMIN role", () => {
    it("can read orders", () => {
      expect(hasPermission(Role.ADMIN, "orders:read")).toBe(true);
    });
    it("can delete orders", () => {
      expect(hasPermission(Role.ADMIN, "orders:delete")).toBe(true);
    });
    it("can manage users", () => {
      expect(hasPermission(Role.ADMIN, "users:read")).toBe(true);
      expect(hasPermission(Role.ADMIN, "users:create")).toBe(true);
      expect(hasPermission(Role.ADMIN, "users:delete")).toBe(true);
    });
  });

  describe("MANAGER role", () => {
    it("can read and create orders", () => {
      expect(hasPermission(Role.MANAGER, "orders:read")).toBe(true);
      expect(hasPermission(Role.MANAGER, "orders:create")).toBe(true);
    });
    it("cannot delete orders", () => {
      expect(hasPermission(Role.MANAGER, "orders:delete")).toBe(false);
    });
    it("cannot manage users", () => {
      expect(hasPermission(Role.MANAGER, "users:read")).toBe(false);
      expect(hasPermission(Role.MANAGER, "users:create")).toBe(false);
    });
    it("can read analytics", () => {
      expect(hasPermission(Role.MANAGER, "analytics:read")).toBe(true);
    });
  });

  describe("VIEWER role", () => {
    it("can read orders, products, and customers", () => {
      expect(hasPermission(Role.VIEWER, "orders:read")).toBe(true);
      expect(hasPermission(Role.VIEWER, "products:read")).toBe(true);
      expect(hasPermission(Role.VIEWER, "customers:read")).toBe(true);
    });
    it("cannot create, update, or delete anything", () => {
      const writeActions = [
        "orders:create", "orders:update", "orders:delete",
        "products:create", "products:update", "products:delete",
        "customers:create", "customers:update", "customers:delete",
        "users:read", "users:create", "users:update", "users:delete",
      ] as const;

      for (const action of writeActions) {
        expect(hasPermission(Role.VIEWER, action)).toBe(false);
      }
    });
    it("cannot read analytics", () => {
      expect(hasPermission(Role.VIEWER, "analytics:read")).toBe(false);
    });
  });

  describe("permission map integrity", () => {
    it("every permission includes ADMIN", () => {
      for (const [key, roles] of Object.entries(PERMISSIONS)) {
        expect(roles).toContain(Role.ADMIN), `ADMIN missing from ${key}`;
      }
    });
  });
});
