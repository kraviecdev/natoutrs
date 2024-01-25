import { ImgWrapper, StyledImg } from "./styled.js";

const Img = ({ user, card, backdrop, gallery, shadow, alt, src, children }) => {
  return (
    <ImgWrapper user={user} card={card} backdrop={backdrop} gallery={gallery}>
      {shadow && <div className="shadow" />}
      <StyledImg alt={alt} src={src} />
      {children}
    </ImgWrapper>
  );
};

export default Img;
