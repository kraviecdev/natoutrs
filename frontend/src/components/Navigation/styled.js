import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  margin: 0 auto;
  padding: 14px 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 24px 0;
  }
`;
