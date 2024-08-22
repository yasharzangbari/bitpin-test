import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.ssm};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xl};
`;
