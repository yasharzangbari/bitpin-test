import React, { KeyboardEvent } from "react";
import * as Styled from "./input.styled";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <Styled.InputWrapper>
      <Styled.StyledInput {...props} />
    </Styled.InputWrapper>
  );
};
