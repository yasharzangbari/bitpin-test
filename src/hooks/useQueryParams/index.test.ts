import { renderHook, act } from "@testing-library/react";
import { useQueryParams } from ".";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("useQueryParams", () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct queryParam object", () => {
    const mockSearchParams = new URLSearchParams("page=1");

    mockUseSearchParams.mockReturnValue(mockSearchParams);

    const { result } = renderHook(() => useQueryParams());

    expect(result.current.queryParam.get("page")).toBe("1");
  });

  it("should update the query parameters in the URL", () => {
    const mockSearchParams = new URLSearchParams("page=1");
    const mockReplace = jest.fn();

    mockUseSearchParams.mockReturnValue(mockSearchParams);
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    mockUsePathname.mockReturnValue("/test");

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery("page", "2");
    });

    expect(mockReplace).toHaveBeenCalledWith("/test?page=2");
  });

  it("should add new query parameter if it does not exist", () => {
    const mockSearchParams = new URLSearchParams();
    const mockReplace = jest.fn();

    mockUseSearchParams.mockReturnValue(mockSearchParams);
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    mockUsePathname.mockReturnValue("/test");

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery("type", "IRT");
    });

    expect(mockReplace).toHaveBeenCalledWith("/test?type=IRT");
  });

  it("should preserve other query parameters while updating a specific key", () => {
    const mockSearchParams = new URLSearchParams("page=1");
    const mockReplace = jest.fn();

    mockUseSearchParams.mockReturnValue(mockSearchParams);
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    mockUsePathname.mockReturnValue("/test");

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQuery("type", "IRT");
    });

    expect(mockReplace).toHaveBeenCalledWith("/test?page=1&type=IRT");
  });
});
