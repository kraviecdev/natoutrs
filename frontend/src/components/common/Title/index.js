import styled, { css } from "styled-components";

const common = css`
  text-transform: uppercase;
  text-shadow: 4px 4px 6px ${({ theme }) => theme.colors.shadow};
  margin: 0;
`;
export const MainHeading = styled.h1`
  color: ${({ theme }) => theme.colors.second_font};
  font-size: ${({ theme }) => theme.font.size.medium}px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.extraMedium}px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: ${({ theme }) => theme.font.size.extraLarge}px;
  }

  ${common}
`;

export const SecondaryHeading = styled.h3`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.font.size.regular}px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.extraMedium}px;
  }

  ${common}
`;

export const ContextHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.small}px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;
  }

  ${common}
`;
