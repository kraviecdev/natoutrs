import { ContextHeading, SecondaryHeading } from "../_assets/Title/index.js";
import { StyledLink } from "../_assets/Link/index.js";
import { Paragraph } from "../_assets/Paragraph/index.js";
import { Article } from "../_assets/Article/index.js";
import { Wrapper } from "../_assets/Wrapper/index.js";
import { Section } from "../_assets/Section/index.js";
import Img from "../_assets/Img/index.jsx";
import IconInfo from "../_assets/IconInfo/index.jsx";

const TourCard = ({ tour }) => {
  const date = new Date(tour.startDates[0]);
  const tourDate = date.toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });

  return (
    <Article>
      <Img $card src={`img/tours/${tour.imageCover}`} alt={tour.name}>
        <Wrapper>
          <SecondaryHeading $card>{tour.name}</SecondaryHeading>
        </Wrapper>
      </Img>

      <Wrapper $column $card>
        <ContextHeading>
          tour difficulty <span>{tour.difficulty}</span>
        </ContextHeading>
        <Paragraph $italic>{tour.summary}</Paragraph>
        <Section $inner>
          <IconInfo name="clock" info={`${tour.duration} days`} />
          <IconInfo name="flag" info={`${tour.locations.length} stops`} />
          <IconInfo name="calendar" info={tourDate} />
          <IconInfo name="user" info={`${tour.maxGroupSize} people`} />
        </Section>
      </Wrapper>

      <Wrapper $card $secondary>
        <Section $inner>
          <Paragraph>
            <span>${tour.price} </span>per person
          </Paragraph>
          <Paragraph>
            <span>{tour.ratingsAverage} </span>rating ({tour.ratingsQuantity})
          </Paragraph>
        </Section>
        <StyledLink $cta to={`/tour/${tour.slug}`}>
          Details
        </StyledLink>
      </Wrapper>
    </Article>
  );
};

export default TourCard;
