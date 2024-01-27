import styled, { css } from "styled-components";

export const Section = styled.section`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;

  ${({ images }) =>
    images &&
    css`
      gap: 0;
      grid-template-columns: 1fr;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

  ${({ reviews }) =>
    reviews &&
    css`
      padding: 12px 6px;
      grid-auto-flow: column;
      grid-auto-rows: max-content;
      overflow: auto hidden;
      max-height: 230px;
    `}
`;
