import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${(props) =>
    props.$icon &&
    css`
      filter: drop-shadow(2px 2px 8px ${({ theme }) => theme.colors.shadow});
    `}

  ${(props) =>
    props.$wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${(props) =>
    props.$center &&
    css`
      width: 100%;
      justify-content: center;
    `}
  
  ${(props) =>
    props.$column &&
    css`
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 16px 0;
    `}
    
    ${(props) =>
    props.$backdrop &&
    css`
      width: 100%;
      justify-content: center;
      background: ${({ theme }) => theme.colors.second};
    `}
    
    ${(props) =>
    props.$review &&
    css`
      box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
      justify-content: space-between;
      padding: 16px;
    `}
    
    ${(props) =>
    props.$cta &&
    css`
      position: relative;
      height: 126px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        height: 162px;
      }
    `}
    
    ${(props) =>
    props.$error &&
    css`
      width: 100%;
      justify-content: center;

      a {
        position: absolute;
        bottom: -10px;
        max-width: max-content;
        border-radius: 24px;
        border: 1px solid ${({ theme }) => theme.colors.contrast};
        padding: 12px 24px;
        transition: 0.4s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.second_font};
          background: ${({ theme }) => theme.colors.contrast};
        }
      }

      div {
        height: max-content;
      }
    `}
    
    ${(props) =>
    props.$settings &&
    css`
      position: absolute;
      left: 10px;
      top: 16px;
      border-radius: 24px;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.contrast};
      box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
      max-width: 44px;
      transition: 0.4s ease-in-out;

      h3 {
        display: none;
      }

      nav {
        overflow: hidden;
        white-space: nowrap;
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        max-width: 100%;
        padding: 16px;
        position: initial;

        h3 {
          display: initial;
        }
      }

      ${(props) =>
        props.$active &&
        css`
          max-width: 200px;
        `}
    `}
`;
