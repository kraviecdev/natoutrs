import { Wrapper } from "../Wrapper/index.js";
import { Paragraph } from "../Paragraph/index.js";
import Img from "../Img/index.jsx";
import Icon from "../Icon/index.jsx";

const DetailBox = ({ text, icon, src, alt, info }) => {
  return (
    <Wrapper>
      {icon ? <Icon name={icon} /> : <Img $round src={src} alt={alt} />}
      <Paragraph $contrast>{text}</Paragraph>
      <Paragraph $capitalize>{info}</Paragraph>
    </Wrapper>
  );
};

export default DetailBox;
