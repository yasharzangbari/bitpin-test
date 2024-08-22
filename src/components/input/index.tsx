import React, { KeyboardEvent } from "react";
import * as Styled from "./input.styled";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType?: string;
}

export const Input: FC<InputProps> = ({ label, inputType, ...props }) => {
  const [focused, setFocused] = React.useState(false);

  const isNumberOnlyInput = (event: KeyboardEvent<HTMLInputElement>) => {
    // if (inputType === "number") {
    //   if (!parseInt(event.key) && event.key != "Backspace") {
    //     event.preventDefault();
    //   }
    // }
  };

  return (
    <Styled.InputWrapper>
      <Styled.StyledInput
        {...props}
        onKeyDown={isNumberOnlyInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(props.value !== "")}
      />
    </Styled.InputWrapper>
  );
};
