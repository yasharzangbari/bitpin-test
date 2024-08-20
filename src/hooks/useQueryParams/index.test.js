import { renderHook, act } from "@testing-library/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQueryParams } from ".";
import { FILTER_ITEMS, QUERY_PARAMS } from "@/constants/global";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  replace: jest.fn(),
});

const URL = "/movies/filters";

describe("useQueryParams", () => {
  let mockReplace;

  beforeEach(() => {
    mockReplace = jest.fn();
    useRouter.mockReturnValue({
      replace: mockReplace,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize queryParam correctly", () => {
    useSearchParams.mockReturnValue(
      new URLSearchParams(`${QUERY_PARAMS.GENRE}=${FILTER_ITEMS.DRAMA}`)
    );
    usePathname.mockReturnValue(URL);

    const { result } = renderHook(() => useQueryParams());

    expect(result.current.queryParam.get(QUERY_PARAMS.GENRE)).toBe(
      FILTER_ITEMS.DRAMA
    );
  });

  it("should set query correctly when value is different", () => {
    useSearchParams.mockReturnValue(
      new URLSearchParams(`${QUERY_PARAMS.GENRE}=${FILTER_ITEMS.DRAMA}`)
    );
    usePathname.mockReturnValue(URL);

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery(QUERY_PARAMS.GENRE, FILTER_ITEMS.COMEDY);
    });

    expect(mockReplace).toHaveBeenCalledWith(
      `${URL}?${QUERY_PARAMS.GENRE}=${FILTER_ITEMS.COMEDY}`
    );
  });

  it("should delete query correctly when value is the same", () => {
    useSearchParams.mockReturnValue(
      new URLSearchParams(`${QUERY_PARAMS.GENRE}=${FILTER_ITEMS.DRAMA}`)
    );
    usePathname.mockReturnValue(URL);

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery(QUERY_PARAMS.GENRE, FILTER_ITEMS.DRAMA);
    });

    expect(mockReplace).toHaveBeenCalledWith(`${URL}?`);
  });

  it("should add a new query param if it does not exist", () => {
    useSearchParams.mockReturnValue(new URLSearchParams(""));
    usePathname.mockReturnValue(URL);

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery(QUERY_PARAMS.SORT, FILTER_ITEMS.HIGHEST_RATE);
    });

    expect(mockReplace).toHaveBeenCalledWith(
      `${URL}?${QUERY_PARAMS.SORT}=${FILTER_ITEMS.HIGHEST_RATE}`
    );
  });
});
