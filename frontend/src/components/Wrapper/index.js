import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ icon }) =>
    icon &&
    css`
      filter: drop-shadow(2px 2px 8px ${({ theme }) => theme.colors.shadow});
    `}

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${({ center }) =>
    center &&
    css`
      width: 100%;
      justify-content: center;
    `}
  
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 16px 0;
    `}
    
    ${({ backdrop }) =>
    backdrop &&
    css`
      width: 100%;
      justify-content: center;
      background: ${({ theme }) => theme.colors.second};
    `}
    
    ${({ review }) =>
    review &&
    css`
      box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
      justify-content: space-between;
      padding: 16px;
    `}
    
    ${({ cta }) =>
    cta &&
    css`
      position: relative;
      height: 126px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        height: 162px;
      }
    `}
    
    ${({ error }) =>
    error &&
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
`;
