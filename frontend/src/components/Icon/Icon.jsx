import { Wrapper } from "../Wrapper/index.js";
import { StyledIcon } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";

const Icon = ({ $rating, name, $contrast, text }) => {
  return (
    <Wrapper $icon>
      <StyledIcon $rating={$rating}>
        <use href={`/img/icons.svg#icon-${name}`} />
      </StyledIcon>
      {text && <Paragraph $contrast={$contrast}>{text}</Paragraph>}
    </Wrapper>
  );
};

export default Icon;
