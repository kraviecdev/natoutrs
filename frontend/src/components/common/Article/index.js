import styled, { css } from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  max-width: 450px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
  border-radius: 24px;
  transition: 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px 6px ${({ theme }) => theme.colors.shadow};
  }

  ${(props) =>
    props.$secondary &&
    css`
      gap: 16px;
      justify-content: space-between;
      align-items: flex-start;
      border-radius: 0;
      padding: 16px;
      overflow: initial;
    `}

  ${(props) =>
    props.$noshadow &&
    css`
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    `}
`;
