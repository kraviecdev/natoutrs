import { BackdropBackground } from "./styled.js";
import { Wrapper } from "../Wrapper/index.js";
import { MainHeading } from "../Title/index.js";
import Img from "../Img/index.jsx";
import IconInfo from "../IconInfo/index.jsx";

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
