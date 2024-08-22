import { renderHook, act } from "@testing-library/react";
import { usePaginate } from ".";
import { useQueryParams } from "..";

jest.mock("..", () => ({
  useQueryParams: jest.fn(),
}));

describe("usePaginate", () => {
  const mockSetQuery = jest.fn();
  const mockGetQueryParam = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useQueryParams as jest.Mock).mockReturnValue({
      queryParam: {
        get: mockGetQueryParam,
      },
      setQuery: mockSetQuery,
    });
  });

  const mockCurrencies: any = Array.from({ length: 45 }, (_, index) => ({
    id: index.toString(),
    title: `Currency ${index + 1}`,
    price: Math.random() * 100,
  }));

  it("should return the correct number of items per page", () => {
    const { result } = renderHook(() => usePaginate(mockCurrencies));

    expect(result.current.itemsPerPage).toBe(20);
  });

  it("should return the correct current items for the first page", () => {
    mockGetQueryParam.mockReturnValue(null);

    const { result } = renderHook(() => usePaginate(mockCurrencies));

    expect(result.current.currentItems.length).toBe(20);
    expect(result.current.currentItems[0].title).toBe("Currency 1");
    expect(result.current.currentItems[19].title).toBe("Currency 20");
  });

  it("should calculate the correct page count", () => {
    const { result } = renderHook(() => usePaginate(mockCurrencies));

    expect(result.current.pageCount).toBe(3);
  });

  it("should set the correct offset based on the current page in query params", () => {
    mockGetQueryParam.mockReturnValue("2");

    const { result } = renderHook(() => usePaginate(mockCurrencies));

    expect(result.current.currentItems.length).toBe(20);
    expect(result.current.currentItems[0].title).toBe("Currency 21");
    expect(result.current.currentItems[19].title).toBe("Currency 40");
  });

  it("should change the page and update the offset correctly", () => {
    const { result } = renderHook(() => usePaginate(mockCurrencies));

    act(() => {
      result.current.onChangePage(2);
    });

    expect(mockSetQuery).toHaveBeenCalledWith("page", "2");
    expect(result.current.currentItems.length).toBe(20);
    expect(result.current.currentItems[0].title).toBe("Currency 21");
    expect(result.current.currentItems[19].title).toBe("Currency 40");
  });
});
