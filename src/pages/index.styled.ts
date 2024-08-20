import { spacing } from "./../constants/theme";
import styled from "styled-components";

export const HomeContainer = styled.div`
  direction: "rtl";
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing["2xl"]};
`;
