import { Wrapper } from "../Wrapper/index.js";
import { StyledIcon } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";

const Icon = ({ name, contrast, text }) => {
  return (
    <Wrapper icon>
      <StyledIcon>
        <use href={`/img/icons.svg#icon-${name}`} />
      </StyledIcon>
      <Paragraph contrast={contrast}>{text}</Paragraph>
    </Wrapper>
  );
};

export default Icon;
