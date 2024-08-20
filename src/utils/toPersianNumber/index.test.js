import { toPersianNumber } from ".";

const MockData = {
  rate_avrage: "3.89",
};

describe("toPersianNumber", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("give an english number and return persian number", () => {
    const result = toPersianNumber(MockData.rate_avrage);
    expect(result).toBe("۳.۸۹");
  });
});
