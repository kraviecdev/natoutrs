import styled, { css } from "styled-components";

export const Main = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
  padding: 0 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 0;
  }

  ${({ form }) =>
    form &&
    css`
      flex-grow: 1;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
    `}
`;
