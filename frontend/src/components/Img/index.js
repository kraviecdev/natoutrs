import styled, { css } from "styled-components";

export const Img = styled.img`
  max-height: 30px;
  border-radius: ${({ round }) => (round ? 50 : 0)}%;
  object-fit: cover;

  ${({ card }) =>
    card &&
    css`
      width: 100%;
      min-height: 300px;
      max-height: none;
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
