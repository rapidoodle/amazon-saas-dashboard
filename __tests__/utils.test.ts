import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate, getInitials, percentChange } from "@/lib/utils";

describe("formatCurrency", () => {
  it("formats whole dollar amounts", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });
  it("formats cents correctly", () => {
    expect(formatCurrency(9.99)).toBe("$9.99");
  });
  it("formats zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  it("formats large numbers with commas", () => {
    expect(formatCurrency(1234567.89)).toBe("$1,234,567.89");
  });
});

describe("getInitials", () => {
  it("returns two initials for full name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });
  it("returns one initial for single name", () => {
    expect(getInitials("Alice")).toBe("A");
  });
  it("uppercases initials", () => {
    expect(getInitials("jane smith")).toBe("JS");
  });
  it("handles more than two words", () => {
    expect(getInitials("Mary Jane Watson")).toBe("MJ");
  });
});

describe("percentChange", () => {
  it("calculates positive change", () => {
    expect(percentChange(150, 100)).toBe(50);
  });
  it("calculates negative change", () => {
    expect(percentChange(50, 100)).toBe(-50);
  });
  it("returns 0 when previous is 0", () => {
    expect(percentChange(100, 0)).toBe(0);
  });
  it("returns 0 when no change", () => {
    expect(percentChange(100, 100)).toBe(0);
  });
  it("rounds to nearest integer", () => {
    expect(percentChange(133, 100)).toBe(33);
  });
});

describe("formatDate", () => {
  it("formats a date string", () => {
    const result = formatDate("2024-01-15");
    expect(result).toContain("Jan");
    expect(result).toContain("2024");
  });
  it("formats a Date object", () => {
    const result = formatDate(new Date("2024-06-01"));
    expect(result).toContain("Jun");
    expect(result).toContain("2024");
  });
});
