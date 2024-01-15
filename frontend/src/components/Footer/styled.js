import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  margin: 0 auto;
  padding: 14px 10px;

  a {
    color: ${({ theme }) => theme.colors.main_font};
    font-size: ${({ theme }) => theme.font.size.small}px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 24px 0;
  }
`;
