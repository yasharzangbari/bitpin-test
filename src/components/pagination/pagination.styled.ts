import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xl};
`;
