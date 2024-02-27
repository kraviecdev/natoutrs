import { Wrapper } from "../Wrapper/index.js";
import Icon from "../Icon/index.jsx";
import { Paragraph } from "../Paragraph/index.js";

const IconInfo = ({ name, info }) => {
  return (
    <Wrapper $icon>
      <Icon name={name} />
      <Paragraph $contrast>{info}</Paragraph>
    </Wrapper>
  );
};

export default IconInfo;
