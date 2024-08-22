import styled from "styled-components";

export const TabsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const TabItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Tab = styled.span<{ active?: boolean }>`
  color: ${({ theme, ...props }) =>
    props.active ? theme.colors.green : theme.colors.textColor};
  cursor: pointer;
`;
