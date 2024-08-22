import { renderHook } from "@testing-library/react";
import { useCurrencies } from ".";
import { useRequest } from "../useRequest";
import { useQueryParams } from "..";

jest.mock("../useRequest");

jest.mock("..", () => ({
  useQueryParams: jest.fn(),
}));

describe("useCurrencies", () => {
  const mockUseRequest = useRequest as jest.Mock;
  const mockUseQueryParams = useQueryParams as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an empty array when data is not available", () => {
    mockUseRequest.mockReturnValue({ data: null, isLoading: false });
    mockUseQueryParams.mockReturnValue({
      queryParam: {
        get: jest.fn().mockReturnValue(null),
      },
    });

    const { result } = renderHook(() => useCurrencies());

    expect(result.current.result).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.currencyType).toBe("IRT");
  });

  it("should return filtered results based on the currency type from query params", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: {
        get: jest.fn().mockReturnValue("USDT"),
      },
    });

    const mockData = {
      results: [
        { currency2: { code: "USDT" }, name: "Market 1" },
        { currency2: { code: "IRT" }, name: "Market 2" },
        { currency2: { code: "USDT" }, name: "Market 3" },
      ],
    };

    mockUseRequest.mockReturnValue({ data: mockData, isLoading: false });

    const { result } = renderHook(() => useCurrencies());

    expect(result.current.result).toEqual([
      { currency2: { code: "USDT" }, name: "Market 1" },
      { currency2: { code: "USDT" }, name: "Market 3" },
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.currencyType).toBe("USDT");
  });

  it("should return all results for default currency type when no query param is provided", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: {
        get: jest.fn().mockReturnValue(null),
      },
    });

    const mockData = {
      results: [
        { currency2: { code: "IRT" }, name: "Market 1" },
        { currency2: { code: "IRT" }, name: "Market 2" },
        { currency2: { code: "USDT" }, name: "Market 3" },
      ],
    };

    mockUseRequest.mockReturnValue({ data: mockData, isLoading: false });

    const { result } = renderHook(() => useCurrencies());

    expect(result.current.result).toEqual([
      { currency2: { code: "IRT" }, name: "Market 1" },
      { currency2: { code: "IRT" }, name: "Market 2" },
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.currencyType).toBe("IRT");
  });

  it("should handle loading state correctly", () => {
    mockUseQueryParams.mockReturnValue({
      queryParam: {
        get: jest.fn().mockReturnValue("IRT"),
      },
    });

    mockUseRequest.mockReturnValue({ data: null, isLoading: true });

    const { result } = renderHook(() => useCurrencies());

    expect(result.current.result).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.currencyType).toBe("IRT");
  });
});
