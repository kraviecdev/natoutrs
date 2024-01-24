import { ImgShadow, ImgWrapper, StyledImg } from "./styled.js";

const Img = ({ user, card, backdrop, shadow, alt, src, children }) => {
  return (
    <ImgWrapper user={user} card={card} backdrop={backdrop}>
      {shadow && <ImgShadow />}
      <StyledImg alt={alt} src={src} />
      {children}
    </ImgWrapper>
  );
};

export default Img;
