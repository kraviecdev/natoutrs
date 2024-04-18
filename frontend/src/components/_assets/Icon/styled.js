import styled, { css } from "styled-components";

export const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.contrast};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 32px;
    height: 32px;
  }

  ${(props) =>
    props.$rating &&
    css`
      fill: ${({ theme }) => theme.colors.second};
    `}

  ${(props) =>
    props.$del &&
    css`
      fill: ${({ theme }) => theme.colors.error};
      cursor: pointer;
    `}
`;
