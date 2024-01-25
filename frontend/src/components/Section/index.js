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
      `}}
`;
