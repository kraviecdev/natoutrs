import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.small}px;
  margin: 0;
  font-style: ${(props) => props.$italic && "italic"};
  text-transform: ${(props) => props.$capitalize && "capitalize"};

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;
  }

  ${(props) =>
    props.$icon &&
    css`
      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        font-size: ${({ theme }) => theme.font.size.small}px;
      }
    `}

  ${(props) =>
    props.$invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    `}

  ${(props) =>
    props.$contrast &&
    css`
      color: ${({ theme }) => theme.colors.contrast};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      text-transform: uppercase;
    `}
`;
