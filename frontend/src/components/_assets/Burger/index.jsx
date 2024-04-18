import { StyledBurger } from "./styled.js";

const Burger = ({ $active, onClick }) => {
  return (
    <StyledBurger $active={$active} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
