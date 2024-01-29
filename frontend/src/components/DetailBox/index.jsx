import Icon from "../Icon/Icon.jsx";
import Img from "../Img/index.jsx";
import { Wrapper } from "../Wrapper/index.js";
import { Paragraph } from "../Paragraph/index.js";

const DetailBox = ({ text, icon, src, alt, info }) => {
  return (
    <Wrapper>
      {icon ? (
        <Icon $contrast name={icon} text={text} />
      ) : (
        <>
          <Img $user src={src} alt={alt} />
          <Paragraph $contrast>{text}</Paragraph>
        </>
      )}
      {info && <Paragraph $info>{info}</Paragraph>}
    </Wrapper>
  );
};

export default DetailBox;
