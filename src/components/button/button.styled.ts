import styled from "styled-components";
import { getButtonToken } from "./button.const";
import { BUTTON_COLOR, BUTTON_SHAPE, BUTTON_SIZE } from "./button.types";

const token = getButtonToken();

export const Button = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    opacity: 0.9;
  }

  &.button {
    &--${BUTTON_SIZE.SMALL} {
      height: ${token.height.small};
      padding: ${token.verticalPadding.small} ${token.horizontalPadding.small};
      gap: ${token.gap.small};
    }
    &--${BUTTON_SIZE.MEDIUM} {
      height: ${token.height.medium};
      padding: ${token.verticalPadding.medium} ${token.horizontalPadding.medium};
      gap: ${token.gap.medium};
    }

    &--${BUTTON_SIZE.LARGE} {
      height: ${token.height.large};
      padding: ${token.verticalPadding.large} ${token.horizontalPadding.large};
      gap: ${token.gap.large};
    }

    &--${BUTTON_SHAPE.SQUARE} {
      border-radius: ${token.radius.square};
    }

    &--${BUTTON_SHAPE.ROUNDED} {
      border-radius: ${token.radius.rounded};
    }

    &.button--${BUTTON_COLOR.PRIMARY} {
      color: ${(props) =>
        props.active
          ? props.theme.colors.whiteFix
          : props.theme.colors.textColorFix};
      background-color: ${(props) =>
        props.active ? props.theme.colors.greenDark : props.theme.colors.green};
    }
  }
`;
