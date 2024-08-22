import { renderHook, act } from "@testing-library/react";
import { useTheme } from ".";
import { THEME_COLOR } from "~/constants/theme";
import { getStorage, setStorage } from "~/utils";
import { lightTheme, darkTheme } from "~/constants/theme";

jest.mock("~/utils", () => ({
  getStorage: jest.fn(),
  setStorage: jest.fn(),
}));

describe("useTheme", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return dark theme as the default when no theme is stored", () => {
    (getStorage as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(darkTheme);
    expect(getStorage).toHaveBeenCalledWith("theme");
  });

  it("should return light theme if it is stored in local storage", () => {
    (getStorage as jest.Mock).mockReturnValue(THEME_COLOR.LIGHT);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(lightTheme);
    expect(getStorage).toHaveBeenCalledWith("theme");
  });

  it("should toggle the theme from dark to light", () => {
    (getStorage as jest.Mock).mockReturnValue(THEME_COLOR.DARK);

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme();
    });

    expect(result.current.theme).toBe(lightTheme);
    expect(setStorage).toHaveBeenCalledWith("theme", THEME_COLOR.LIGHT);
  });

  it("should toggle the theme from light to dark", () => {
    (getStorage as jest.Mock).mockReturnValue(THEME_COLOR.LIGHT);

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme();
    });

    expect(result.current.theme).toBe(darkTheme);
    expect(setStorage).toHaveBeenCalledWith("theme", THEME_COLOR.DARK);
  });
});
