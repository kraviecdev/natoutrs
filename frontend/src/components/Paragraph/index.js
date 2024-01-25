import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.small}px;
  margin: 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;
  }

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    `}

  ${({ contrast }) =>
    contrast &&
    css`
      color: ${({ theme }) => theme.colors.contrast};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      text-transform: uppercase;
    `}
    
    ${({ info }) =>
    info &&
    css`
      text-transform: capitalize;
    `}
    
    ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`;
