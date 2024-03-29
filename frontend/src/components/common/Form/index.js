import styled, { css } from "styled-components";
import { Form } from "react-router-dom";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: max-content;
  padding: 32px 12px;
  gap: 24px;
  border-radius: 6px;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 48px;
    max-width: max-content;
  }
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

  ${(props) =>
    props.$delete &&
    css`
      display: flex;
      align-items: center;
      background: transparent;
      padding: 0;

      &:hover {
        transform: translateY(-4px);
        box-shadow: none;
        filter: drop-shadow(0 10px 3px ${({ theme }) => theme.colors.shadow});
      }
    `}
`;
