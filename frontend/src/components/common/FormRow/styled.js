import styled, { css } from "styled-components";

export const RowWrapper = styled.div`
  display: grid;
  align-content: start;
  justify-items: start;
  grid-gap: 6px;
  width: 100%;
  color: ${({ theme }) => theme.colors.third_font};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.weight.small};

  &:focus-within {
    color: ${({ theme }) => theme.colors.main_font};
  }

  ${(props) =>
    props.$invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};

      input {
        color: inherit;
        border: 1px solid;
      }
    `}

  ${(props) =>
    props.$valid &&
    css`
      color: ${({ theme }) => theme.colors.main_font};

      input {
        color: inherit;
        border: 1px solid;
      }
    `}
`;

export const Input = styled.input`
  border-radius: 16px;
  outline: none;
  padding: 16px 10px;
  color: inherit;
  width: 100%;
  background: none;
  font-size: ${({ theme }) => theme.font.size.regular}px;
  border: 1px solid transparent;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.shadow};

  &:focus {
    color: ${({ theme }) => theme.colors.main_font};
    border: 1px solid;
  }
`;
