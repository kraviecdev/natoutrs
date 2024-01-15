import { CardSection, CardWrapper } from "./styled.js";
import { Img, ImgShadow } from "../Img/styled.js";
import { Wrapper } from "../Wrapper/styled.js";
import { ContextHeading, SecondaryHeading } from "../Title/styled.js";
import { StyledLink } from "../Link/styled.js";
import { Paragraph } from "../Paragraph/styled.js";
import Icon from "../Icon/Icon.jsx";

const Card = ({ tour }) => {
  const date = new Date(tour.startDates[0]);
  const tourDate = date.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  return (
    <CardWrapper>
      <CardSection heading>
        <Wrapper image>
          <ImgShadow />
          <Img card src={`img/tours/${tour.imageCover}`} alt={tour.name} />
          <SecondaryHeading>{tour.name}</SecondaryHeading>
        </Wrapper>
      </CardSection>

      <CardSection details>
        <ContextHeading>{`${tour.difficulty} difficulty ${tour.duration}-day tour`}</ContextHeading>
        <Paragraph>{tour.summary}</Paragraph>
        <ul>
          <li>
            <Icon name="map-pin" text={tour.startLocation.description} />
          </li>
          <li>
            <Icon name="calendar" text={tourDate} />
          </li>
          <li>
            <Icon name="flag" text={`${tour.locations.length} stops`} />
          </li>
          <li>
            <Icon name="user" text={`${tour.maxGroupSize} people`} />
          </li>
        </ul>
      </CardSection>

      <CardSection footer>
        <ul>
          <li>
            <span>{`$${tour.price}`}</span>
            {" per person"}
          </li>
          <li>
            <span>{tour.ratingsAverage}</span>
            {` rating (${tour.ratingsQuantity})`}
          </li>
        </ul>
        <StyledLink cta to={`/tours/${tour.slug}`}>
          Details
        </StyledLink>
      </CardSection>
    </CardWrapper>
  );
};

export default Card;
