import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.small}px;
  margin: 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;
  }

  ${(props) =>
    props.$invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}

  ${(props) =>
    props.$contrast &&
    css`
      color: ${({ theme }) => theme.colors.contrast};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      text-transform: uppercase;
    `}
    
    ${(props) =>
    props.$info &&
    css`
      text-transform: capitalize;
    `}
    
    ${(props) =>
    props.$italic &&
    css`
      font-style: italic;
    `}
`;
