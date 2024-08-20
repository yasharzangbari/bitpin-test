export enum FONT_WEIGHT {
  regular = 300,
  bold = 700,
}

export const spacing = {
  none: "0px",
  xxs: "2px",
  xs: "4px",
  ssm: "6px",
  sm: "10px",
  md: "12px",
  xmd: "14px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "40px",
  "5xl": "48px",
  "6xl": "64px",
} as const;

export const rounding = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  full: "999px",
} as const;

export enum THEME_COLOR {
  DARK = "dark",
  LIGHT = "light",
}

export const lightTheme = {
  colors: {
    background: "#fff",
    svgFill: "#1a1a1a",
    listColor: "#d1f8e4",
    textColor: "#404040",
    green: "#4ef09d",
    textColorFix: "#404040",
    greenDark: "#002920",
    whiteFix: "#fff",
  },
  fontWeight: FONT_WEIGHT,
  spacing: spacing,
  rounding: rounding,
};

export const darkTheme = {
  colors: {
    background: "#1a1a1a",
    svgFill: "#fff",
    listColor: "#222",
    textColor: "#fff",
    green: "#4ef09d",
    textColorFix: "#404040",
    greenDark: "#002920",
    whiteFix: "#fff",
  },
  fontWeight: FONT_WEIGHT,
  spacing: spacing,
  rounding: rounding,
};
