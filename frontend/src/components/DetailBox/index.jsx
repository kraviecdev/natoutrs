import Icon from "../Icon/Icon.jsx";
import Img from "../Img/index.jsx";
import { Wrapper } from "../Wrapper/index.js";

const DetailBox = ({ text, icon, src, alt, info }) => {
  return (
    <Wrapper>
      {icon ? (
        <Icon name={icon} text={text} />
      ) : (
        <>
          <Img round src={src} alt={alt} />
          <span>{text}</span>
        </>
      )}
      {info && <span>{info}</span>}
    </Wrapper>
  );
};

export default DetailBox;
