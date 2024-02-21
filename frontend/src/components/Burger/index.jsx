import { StyledBurger } from "./styled";

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
