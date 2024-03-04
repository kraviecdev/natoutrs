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
      max-width: 24px;
      padding: 24px 0;
      overflow: hidden;
      white-space: nowrap;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        max-width: max-content;
      }
    `}
    
    ${(props) =>
      props.$active &&
      css`
        width: 100%;
        background: ${({ theme }) => theme.colors.main};
        position: absolute;
        z-index: 99;
        top: 50%;
        left: 0;
        padding: 24px 10px;
        transform: translateY(-50%);
        max-width: 600px;
      `}}
`;
