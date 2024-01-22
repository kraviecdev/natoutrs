import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.regular}px;
  font-style: italic;
  margin: 0;

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${({ theme }) => theme.colors.error};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    `}
`;
