import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${({ round }) => (round ? 50 : 0)}%;
  object-fit: cover;
`;
export const ImgWrapper = styled.div`
  height: 35px;

  .shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.second},
      transparent
    );
  }

  ${({ user }) =>
    user &&
    css`
      border-radius: 50%;

      img {
        border-radius: inherit;
      }
    `}

  ${({ card }) =>
    card &&
    css`
      position: relative;
      min-height: 240px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xs}px) {
        min-height: 300px;
      }
    `}

    ${({ backdrop }) =>
    backdrop &&
    css`
      position: relative;
      margin: 12px;
      width: 100%;
      height: auto;
      max-width: ${({ theme }) => theme.breakpoints.xl}px;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        height: 580px;
      }

      .heading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        background: linear-gradient(
          90deg,
          transparent,
          ${({ theme }) => theme.colors.second},
          transparent
        );
        justify-content: center;
        align-items: center;
        width: max-content;
        gap: 6px;
        padding: 6px 0;

        p {
          color: ${({ theme }) => theme.colors.second_font};
          font-weight: ${({ theme }) => theme.font.weight.medium};
        }

        svg {
          fill: ${({ theme }) => theme.colors.second_font};
        }
      }

      .shadow {
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

    ${({ gallery }) =>
    gallery &&
    css`
      height: auto;
      max-height: 40vw;
    `}
`;
