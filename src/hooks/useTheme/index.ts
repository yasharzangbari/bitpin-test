import { useState } from "react";
import { THEME_COLOR } from "~/constants/theme";
import { getStorage, setStorage } from "~/utils";
import { lightTheme, darkTheme } from "~/constants/theme";

export const useTheme = () => {
  // const currentTheme = getStorage("theme");
  const [theme, setTheme] = useState(THEME_COLOR.DARK);

  const changeTheme = () => {
    const themeColor =
      theme === THEME_COLOR.DARK ? THEME_COLOR.LIGHT : THEME_COLOR.DARK;
    setTheme(themeColor);
    setStorage("theme", themeColor);
  };

  const themeMode = theme === THEME_COLOR.DARK ? darkTheme : lightTheme;

  return { theme: themeMode, changeTheme };
};
