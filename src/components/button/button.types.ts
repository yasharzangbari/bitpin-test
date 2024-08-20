import React from "react";

export enum BUTTON_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum BUTTON_SHAPE {
  SQUARE = "square",
  ROUNDED = "rounded",
}

export enum BUTTON_COLOR {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "size"> & {
  size?: BUTTON_SIZE | "small" | "medium" | "large";
  shape?: BUTTON_SHAPE | "rounded" | "square";
  color?: BUTTON_COLOR | "primary" | "secondary";
  title?: string;
  type?: "button" | "submit";
};
