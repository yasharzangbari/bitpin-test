import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  > svg {
    fill: ${({ theme }) => theme.colors.svgFill};
    cursor: pointer;
  }
  > img {
    cursor: pointer;
  }
`;
