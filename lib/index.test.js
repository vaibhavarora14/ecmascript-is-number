const isNumber = require("./index");

describe("", () => {
  it("should return true", () => {
    expect(isNumber("101")).toBe(true);
    expect(isNumber(101)).toBe(true);
    expect(isNumber(108698698698698698698689698698)).toBe(true);
    expect(isNumber(4.5)).toBe(true);
    expect(isNumber(1e38)).toBe(true);
    expect(isNumber(-4.6)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });
  it("should return false", () => {
    expect(isNumber()).toBe(false);
    expect(isNumber("a")).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber("NaN")).toBe(false);
    expect(isNumber("")).toBe(false);
    expect(isNumber("  \t\n")).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
