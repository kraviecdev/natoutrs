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

  p {
    display: none;
  }

  &:focus-within {
    color: ${({ theme }) => theme.colors.main_font};
  }

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};

      p {
        display: inherit;
      }

      input {
        border-bottom: 1px solid ${({ theme }) => theme.colors.error};
      }
    `}

  ${({ valid }) =>
    valid &&
    css`
      color: ${({ theme }) => theme.colors.main_font};

      input {
        border-bottom: 1px solid ${({ theme }) => theme.colors.main_font};
      }
    `}

  ${({ checkbox }) =>
    checkbox &&
    css`
      flex-direction: row-reverse;
      width: 100%;
      gap: 8px;
      font-weight: ${({ theme }) => theme.font.weight.regular};

      input {
        accent-color: ${({ theme }) => theme.colors.green};
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.lg}px) {
        width: 100%;
      }
    `}
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 16px 0;
  color: inherit;
  width: 100%;
  background: none;
  font-size: ${({ theme }) => theme.font.size.regular}px;
  border-bottom: 1px solid;

  &:focus {
    color: ${({ theme }) => theme.colors.indigo};
    border-bottom: 1px solid ${({ theme }) => theme.colors.indigo};
  }
`;
