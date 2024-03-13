import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  gap: 12px;

  ${(props) =>
    props.$header &&
    css`
      margin: 0 auto;
      padding: 24px 12px;
      justify-content: space-between;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xl}px) {
        padding: 24px 0;
      }
    `}

  ${(props) =>
    props.$settings &&
    css`
      position: sticky;
      top: 24px;
      max-width: 24px;
      overflow: hidden;
      white-space: nowrap;
      flex-direction: column;
      align-items: flex-start;
      align-self: baseline;
      transition: 0.4s ease-in-out;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        max-width: max-content;
      }
    `}
    
    ${(props) =>
      props.$active &&
      css`
        max-width: 600px;
      `}}
`;
