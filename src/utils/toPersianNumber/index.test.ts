import { toPersianNumber } from ".";

describe("toPersianNumber", () => {
  it("should convert a single digit number to its Persian number", () => {
    expect(toPersianNumber(1)).toBe("۱");
    expect(toPersianNumber(5)).toBe("۵");
    expect(toPersianNumber(9)).toBe("۹");
  });

  it("should convert a multi-digit number to its Persian number", () => {
    expect(toPersianNumber(1234567890)).toBe("۱۲۳۴۵۶۷۸۹۰");
  });

  it("should convert a string of digits to its Persian number", () => {
    expect(toPersianNumber("9876543210")).toBe("۹۸۷۶۵۴۳۲۱۰");
  });
});
