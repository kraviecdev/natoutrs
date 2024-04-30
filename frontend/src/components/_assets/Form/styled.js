import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: max-content;
  min-width: unset;
  padding: 32px 12px;
  gap: 24px;
  border-radius: 24px;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 48px;
    min-width: 500px;
    max-width: max-content;
  }

  ${(props) =>
    props.$second &&
    css`
      box-shadow: none;
      border-radius: 0;
      padding: 0 12px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        padding: 0;
      }
    `}
`;

export const FormButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.second_font};
  text-transform: uppercase;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
  }

  &:disabled {
    transform: none;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.second};
  }
`;

export const InputWrapper = styled.div`
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
    props.$file &&
    css`
      grid-template-columns: max-content 1fr;
      grid-column-gap: 12px;
      align-items: center;
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

  ${(props) =>
    props.$invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};

      input {
        color: inherit;
        border: 1px solid;
      }
    `};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 10px;
  border-radius: 2px;
  color: inherit;
  outline: none;
  border: 1px solid transparent;
  background: none;
  font-size: ${({ theme }) => theme.font.size.regular}px;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.shadow};

  &[type="file"] {
    display: none;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.main_font};
    border: 1px solid;
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.contrast};
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
`;
