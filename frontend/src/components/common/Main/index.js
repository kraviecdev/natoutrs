import styled, { css } from "styled-components";

export const Main = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  padding: 16px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 32px 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 32px 0;
  }

  ${(props) =>
    props.$settings &&
    css`
      position: relative;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: start;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        grid-template-columns: max-content 1fr;
      }
    `}
`;
