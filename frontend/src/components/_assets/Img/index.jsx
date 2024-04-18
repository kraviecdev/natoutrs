import { ImgWrapper, StyledImg } from "./styled.js";

const Img = ({
  $round,
  $card,
  $backdrop,
  $gallery,
  $cta,
  $error,
  $settings,
  alt,
  src,
  children,
}) => {
  return (
    <ImgWrapper
      $round={$round}
      $card={$card}
      $backdrop={$backdrop}
      $gallery={$gallery}
      $cta={$cta}
      $error={$error}
      $settings={$settings}
    >
      <StyledImg alt={alt} src={src} />
      {children}
    </ImgWrapper>
  );
};

export default Img;
