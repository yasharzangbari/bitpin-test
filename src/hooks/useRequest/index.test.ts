import { renderHook } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from ".";
import { requestHandler } from "~/lib/api/requestFactory";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("~/lib/api/requestFactory", () => ({
  requestHandler: jest.fn(),
}));

describe("useRequest", () => {
  const mockKeys = ["testKey"];
  const mockRequest = { url: "/test-endpoint", method: "GET" };
  const mockData = { data: "test data" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call useQuery with the correct arguments", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    const { result } = renderHook(() =>
      useRequest(mockKeys, mockRequest, false)
    );

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: mockKeys,
      queryFn: expect.any(Function),
      refetchInterval: undefined,
      initialData: undefined,
      gcTime: 0,
      staleTime: 0,
    });

    expect(result.current.data).toBe(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should pass the correct refetchInterval when refetch is true", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderHook(() => useRequest(mockKeys, mockRequest, true));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: mockKeys,
      queryFn: expect.any(Function),
      refetchInterval: 3000,
      initialData: undefined,
      gcTime: 0,
      staleTime: 0,
    });
  });

  it("should call requestHandler with the correct request config", async () => {
    const mockQueryFn = jest.fn().mockResolvedValue(mockData);
    (useQuery as jest.Mock).mockImplementation(({ queryFn }) => queryFn());

    (requestHandler as jest.Mock).mockImplementation(mockQueryFn);

    const { result } = renderHook(() =>
      useRequest(mockKeys, mockRequest, false)
    );

    expect(requestHandler).toHaveBeenCalledWith(mockRequest);
  });
});
