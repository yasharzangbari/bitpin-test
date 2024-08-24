import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  width: 600px;
  margin: auto;
`;
