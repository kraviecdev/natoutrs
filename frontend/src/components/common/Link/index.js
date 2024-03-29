import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.small}px;
  color: ${({ theme }) => theme.colors.second_font};
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;

  span {
    display: none;
  }

  &:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 10px 3px ${({ theme }) => theme.colors.shadow});
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: ${({ theme }) => theme.font.size.regular}px;

    span {
      display: inherit;
    }
  }

  ${(props) =>
    props.$dark &&
    css`
      color: ${({ theme }) => theme.colors.main_font};
    `}

  ${(props) =>
    props.$contrast &&
    css`
      color: ${({ theme }) => theme.colors.contrast};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    `}

  ${(props) =>
    props.$cta &&
    css`
      border: 1px solid;
      border-radius: 24px;
      padding: 12px 24px;

      &:hover {
        background: ${({ theme }) => theme.colors.contrast};
      }
    `}
    
    ${(props) =>
    props.$error &&
    css`
      max-width: max-content;
      color: ${({ theme }) => theme.colors.contrast};

      &:hover {
        color: ${({ theme }) => theme.colors.second_font};
        background: ${({ theme }) => theme.colors.contrast};
      }
    `}
`;
