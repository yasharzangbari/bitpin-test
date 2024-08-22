import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  padding-left: ${({ theme }) => theme.spacing.lg};
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.textColor};

  &:focus {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
