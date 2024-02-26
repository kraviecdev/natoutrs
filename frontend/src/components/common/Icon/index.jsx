import { StyledIcon } from "./styled.js";

const Icon = ({ $rating, name }) => {
  return (
    <StyledIcon $rating={$rating}>
      <use href={`/img/icons.svg#icon-${name}`} />
    </StyledIcon>
  );
};

export default Icon;
