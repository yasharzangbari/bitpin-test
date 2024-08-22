import { timeConvertor } from ".";

describe("timeConvertor", () => {
  it("should handle time correctly", () => {
    const timestamp = 1724328000;

    const persianTime = timeConvertor(timestamp);

    expect(persianTime).toBe("۱۵:۳۰");
  });
});
