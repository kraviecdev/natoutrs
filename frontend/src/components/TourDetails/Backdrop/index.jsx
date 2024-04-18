import { BackdropBackground } from "./styled.js";
import { Wrapper } from "../../_assets/Wrapper/index.js";
import { MainHeading } from "../../_assets/Title/index.js";
import Img from "../../_assets/Img/index.jsx";
import IconInfo from "../../_assets/IconInfo/index.jsx";

const Backdrop = ({ tour }) => {
  return (
    <BackdropBackground>
      <Img $backdrop src={`/img/tours/${tour.imageCover}`} alt={tour.name}>
        <div />
      </Img>

      <Wrapper $column $heading>
        <MainHeading>{tour.name}</MainHeading>
        <Wrapper $center>
          <IconInfo name="clock" info={`${tour.duration} days`} />
          <IconInfo name="map-pin" info={tour.startLocation.description} />
        </Wrapper>
      </Wrapper>
    </BackdropBackground>
  );
};

export default Backdrop;
