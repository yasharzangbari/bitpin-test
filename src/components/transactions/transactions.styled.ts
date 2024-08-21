import styled from "styled-components";
import { Transaction } from "~/types/transactions";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.listColor};
  color: ${({ theme }) => theme.colors.textColor};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.rounding.lg};
  margin-top: ${({ theme }) => theme.spacing.sm};
  text-align: center !important;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid #444;
`;

export const Row = styled.div`
  display: flex;

  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.none}`};
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div<{
  align?: string;
  type?: Transaction["type"];
  isPrice?: boolean;
}>`
  flex: 3;
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.isPrice && props.type === "buy"
      ? props.theme.colors.green
      : props.isPrice && props.type === "sell"
        ? props.theme.colors.redFix
        : props.theme.colors.textColor};
`;
