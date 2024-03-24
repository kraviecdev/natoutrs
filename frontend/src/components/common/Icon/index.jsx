import { StyledIcon } from "./styled.js";

const Icon = ({ $rating, $del, name }) => {
  return (
    <StyledIcon $rating={$rating} $del={$del}>
      <use href={`/img/icons.svg#icon-${name}`} />
    </StyledIcon>
  );
};

export default Icon;
