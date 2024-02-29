import styled from "styled-components";

export const Main = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
  flex-grow: 1;
  padding: 16px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 32px 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 32px 0;
  }
`;