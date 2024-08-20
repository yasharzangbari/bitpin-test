"use client";
import React, { FC } from "react";
import * as Styled from "./button.styled";
import classNames from "classnames";
import {
  BUTTON_COLOR,
  BUTTON_SHAPE,
  BUTTON_SIZE,
  ButtonProps,
} from "./button.types";

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    children,
    onClick,
    className,
    style,
    size = BUTTON_SIZE.LARGE,
    shape = BUTTON_SHAPE.SQUARE,
    color = BUTTON_COLOR.PRIMARY,
    ...rest
  } = props;

  return (
    <Styled.Button
      className={classNames(
        "button",
        `button--${size}`,
        `button--${shape}`,
        `button--${color}`,
        className
      )}
      {...rest}
      onClick={onClick}
    >
      {title}
    </Styled.Button>
  );
};
