import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: ${(props) => (props.$icon ? 8 : 16)}px;
  align-items: center;
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => (props.$column ? "column" : "row")};

  ${(props) =>
    props.$card &&
    css`
      align-items: flex-start;
      width: 100%;
      padding: 24px;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      color: ${({ theme }) => theme.colors.second_font};
      background: ${({ theme }) => theme.colors.second};
    `}
  
    ${(props) =>
    props.$heading &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        90deg,
        transparent,
        ${({ theme }) => theme.colors.second},
        transparent
      );
      padding: 6px 0;
      white-space: nowrap;
    `}
    
    ${(props) =>
    props.$details &&
    css`
      align-items: flex-start;
    `}
`;
