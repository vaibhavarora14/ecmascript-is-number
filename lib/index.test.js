import isNumber from "./index";

describe("", () => {
  it("should return true", () => {
    expect(isNumber("101")).toBe(true);
    expect(isNumber(101)).toBe(true);
    expect(isNumber(108698698698698698698689698698)).toBe(true);
    expect(isNumber(4.5)).toBe(true);
    expect(isNumber(1e38)).toBe(true);
  });
  it("should return false", () => {
    expect(isNumber()).toBe(false);
    expect(isNumber("")).toBe(false);
    expect(isNumber("  \t\n")).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
