import { lightTheme } from "~/constants/theme";

export type Theme = typeof lightTheme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
