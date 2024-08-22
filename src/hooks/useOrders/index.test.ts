import { renderHook, act } from "@testing-library/react";
import { useOrders } from ".";
import { useRouter } from "next/router";
import { useRequest } from "../useRequest";
import { ChangeEvent } from "react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../useRequest", () => ({
  useRequest: jest.fn(),
}));

describe("useOrders", () => {
  const mockUseRouter = useRouter as jest.Mock;
  const mockUseRequest = useRequest as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an empty orders array and isLoading as false when id is not present in the router query", () => {
    mockUseRouter.mockReturnValue({ query: {} });

    const { result } = renderHook(() => useOrders("some-key"));

    expect(result.current.orders).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it("should return sorted orders and isLoading from useRequest", () => {
    mockUseRouter.mockReturnValue({ query: { id: "1" } });
    const mockOrders = [
      { price: "50", remain: "5" },
      { price: "100", remain: "10" },
      { price: "75", remain: "7" },
    ];
    mockUseRequest.mockReturnValue({
      data: { orders: mockOrders },
      isLoading: false,
    });

    const { result } = renderHook(() => useOrders("some-key"));

    expect(result.current.orders).toEqual([
      { price: "100", remain: "10" },
      { price: "75", remain: "7" },
      { price: "50", remain: "5" },
    ]);
    expect(result.current.isLoading).toBe(false);
  });

  it("should calculate the correct order results", () => {
    mockUseRouter.mockReturnValue({ query: { id: "1" } });
    const mockOrders = [
      { price: "50", remain: "5" },
      { price: "100", remain: "10" },
      { price: "75", remain: "7" },
    ];
    mockUseRequest.mockReturnValue({
      data: { orders: mockOrders },
      isLoading: false,
    });

    const { result } = renderHook(() => useOrders("some-key"));

    const mockEvent = {
      target: { value: "50" },
    } as any;

    act(() => {
      result.current.calculateOrder(mockEvent);
    });

    expect(result.current.finalResult?.remainVolume).toBe(11);
    expect(result.current.finalResult?.averagePrice).toBe(75);
    expect(result.current.finalResult?.payOut).toBe(825);
  });
});
