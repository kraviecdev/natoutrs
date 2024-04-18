import styled, { css } from "styled-components";

const common = css`
  text-transform: uppercase;
  text-shadow: 4px 4px 6px ${({ theme }) => theme.colors.shadow};
  margin: 0;

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.contrast};
  }
`;
export const MainHeading = styled.h1`
  color: ${({ theme }) => theme.colors.contrast};
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

  ${(props) =>
    props.$card &&
    css`
      position: inherit;
      right: 10px;
      bottom: 10%;
      max-width: 60%;
      text-align: right;
    `}

  ${common}
`;

export const ContextHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.size.small}px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;
  }

  ${common}
`;
