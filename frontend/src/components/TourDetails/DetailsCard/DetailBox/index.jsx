import { Wrapper } from "../../../_assets/Wrapper/index.js";
import { Paragraph } from "../../../_assets/Paragraph/index.js";
import Img from "../../../_assets/Img/index.jsx";
import Icon from "../../../_assets/Icon/index.jsx";

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
