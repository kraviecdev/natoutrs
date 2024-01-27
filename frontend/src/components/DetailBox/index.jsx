import Icon from "../Icon/Icon.jsx";
import Img from "../Img/index.jsx";
import { Wrapper } from "../Wrapper/index.js";
import { Paragraph } from "../Paragraph/index.js";

const DetailBox = ({ text, icon, src, alt, info }) => {
  return (
    <Wrapper>
      {icon ? (
        <Icon contrast="true" name={icon} text={text} />
      ) : (
        <>
          <Img user="true" src={src} alt={alt} />
          <Paragraph contrast="true">{text}</Paragraph>
        </>
      )}
      {info && <Paragraph info="true">{info}</Paragraph>}
    </Wrapper>
  );
};

export default DetailBox;
