import styled, { css } from "styled-components";

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  max-width: 450px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
  border-radius: 24px;
  transition: 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px 6px ${({ theme }) => theme.colors.shadow};
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  width: 100%;

  ul {
    display: grid;
    gap: 10px;
    padding: 0;
    list-style: none;
    font-size: ${({ theme }) => theme.font.size.small}px;

    div {
      align-items: flex-start;
      flex-wrap: nowrap;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ul {
      font-size: ${({ theme }) => theme.font.size.regular}px;
    }
  }

  ${(props) =>
    props.$heading &&
    css`
      padding: 0;

      h3 {
        max-width: 60%;
        text-align: right;
        position: absolute;
        right: 10px;
        bottom: 30px;
      }
    `}

  ${(props) =>
    props.$details &&
    css`
      align-items: flex-start;
      gap: 10px;

      ul {
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }
    `}

  ${(props) =>
    props.$footer &&
    css`
      flex-direction: row;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.second_font};
      background: ${({ theme }) => theme.colors.second};

      span {
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }
    `}
`;
