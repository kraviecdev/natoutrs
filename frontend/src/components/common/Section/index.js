import styled, { css } from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 20px;
  width: 100%;

  ${(props) =>
    props.$about &&
    css`
      justify-items: start;
      align-items: baseline;
    `}

  ${(props) =>
    props.$inner &&
    css`
      justify-items: start;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 10px;
    `}

  ${(props) =>
    props.$images &&
    css`
      grid-template-columns: 1fr;
      gap: 0;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

  ${(props) =>
    props.$reviews &&
    css`
      justify-items: start;
      padding: 12px 6px;
      grid-template-columns: none;
      grid-auto-flow: column;
      grid-auto-rows: max-content;
      overflow-x: auto;
      overflow-y: hidden;
      max-height: 282px;
    `} 
  
  ${(props) =>
    props.$cta &&
    css`
      justify-items: normal;
      padding: 24px 10px 8px;
      grid-template-columns: 1fr;
      border-radius: 12px;
      background: ${({ theme }) => theme.colors.second};
      box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xs}px) {
        padding: 32px 16px 16px;
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 16px;
      }
    `};

  ${(props) =>
    props.$settings &&
    css`
      grid-template-columns: 1fr;
      align-self: baseline;
    `};
`;
