import styled, { css } from "styled-components";

export const Img = styled.img`
  max-height: 30px;
  border-radius: ${({ round }) => (round ? 50 : 0)}%;

  ${({ card }) =>
    card &&
    css`
      max-height: 300px;
    `}
`;

export const ImgShadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.second},
    transparent
  );
`;
