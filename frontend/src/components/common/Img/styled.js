import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: inherit;
`;
export const ImgWrapper = styled.div`
  height: ${(props) => (props.$gallery ? "auto" : "35px")};
  border-radius: ${(props) => props.$round && "50%"};

  ${(props) =>
    props.$card &&
    css`
      position: relative;
      height: auto;
      min-height: 240px;

      img {
        height: 100%;
        max-height: 362px;
      }

      div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(
          to top,
          ${({ theme }) => theme.colors.second},
          transparent
        );
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xs}px) {
        min-height: 300px;
      }
    `}

  ${(props) =>
    props.$backdrop &&
    css`
      position: relative;
      width: 100%;
      margin: 12px;
      height: auto;
      max-width: ${({ theme }) => theme.breakpoints.xl}px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        height: 580px;
      }

      div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.second} 0%,
            transparent 6%,
            transparent 94%,
            ${({ theme }) => theme.colors.second} 100%
          ),
          linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.second} 0%,
            transparent 6%,
            transparent 94%,
            ${({ theme }) => theme.colors.second} 100%
          );
      }
    `}

    ${(props) =>
    props.$gallery &&
    css`
      height: auto;
      max-height: 40vw;
    `}

    ${(props) =>
    props.$cta &&
    css`
      height: 100%;
      aspect-ratio: 1 / 1;
      position: absolute;

      img {
        height: 100%;
      }

      &:first-of-type {
        background: ${({ theme }) => theme.colors.contrast};
        z-index: 9;

        img {
          object-fit: contain;
        }
      }

      &:nth-of-type(2) {
        left: 25%;
        z-index: 99;
      }

      &:nth-of-type(3) {
        left: 50%;
        z-index: 999;
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        &:nth-of-type(2) {
          left: 15%;
          z-index: 99;
        }

        &:nth-of-type(3) {
          left: 30%;
          z-index: 999;
        }
      }
    `}
    
    ${(prop) =>
    prop.$error &&
    css`
      width: 100%;
      height: max-content;
      align-self: center;
    `}
    
    ${(prop) =>
    prop.$settings &&
    css`
      aspect-ratio: 1 / 1;
    `}
`;
