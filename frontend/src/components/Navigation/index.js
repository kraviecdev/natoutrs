import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  margin: 0 auto;
  padding: 14px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 24px 0;
  }

  ${(props) =>
    props.$settings &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      color: ${({ theme }) => theme.colors.second_font};
      padding: 0;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xl}px) {
        padding: 0;
      }

      &:first-of-type {
        padding: 0 0 24px 0;
        border-bottom: 1px solid;
      }

      h3,
      p {
        color: ${({ theme }) => theme.colors.second_font};
      }

      svg {
        fill: ${({ theme }) => theme.colors.second_font};
      }
    `}
`;
