import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: 5px;
  border: 1px solid #fff;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xl};
`;
