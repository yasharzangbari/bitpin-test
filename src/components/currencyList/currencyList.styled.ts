import styled from "styled-components";

export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.listColor};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.rounding.md};
  margin: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.none}`};
`;

export const CurrencySection = styled.div`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing["4xl"]}`};
  /* margin-bottom: ${({ theme }) => theme.spacing.xl}; */
  color: ${({ theme }) => theme.colors.textColor};
  > img {
    width: 32px;
    height: auto;
  }
`;

export const Caption = styled.div`
  margin-right: ${({ theme }) => theme.spacing.ssm};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  > span {
    font-size: 14px;
  }
`;

export const Header = styled.div`
  /* margin-right: ${({ theme }) => theme.spacing.ssm}; */
  gap: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
`;
