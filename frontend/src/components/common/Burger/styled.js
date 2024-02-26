import styled from "styled-components";

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  cursor: pointer;
  z-index: 2;
  align-self: flex-end;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 4px;
    background: ${({ theme }) => theme.colors.second_font};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-of-type {
      transform: ${(props) => (props.$active ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-of-type(2) {
      opacity: ${(props) => (props.$active ? "0" : "1")};
      transform: ${(props) =>
        props.$active ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-of-type(3) {
      transform: ${(props) => (props.$active ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;
