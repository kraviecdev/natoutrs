import Backdrop from "../common/Backdrop/index.jsx";
import Img from "../common/Img/index.jsx";
import CustomMap from "../Map/index.jsx";
import ReviewCard from "../ReviewCard/index.jsx";
import DetailsCard from "../DetailsCard/index.jsx";

import { Wrapper } from "../common/Wrapper/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import { Section } from "../common/Section/index.js";
import { Paragraph } from "../common/Paragraph/index.js";
import { Main } from "../common/Main/index.js";
import { StyledLink } from "../common/Link/index.js";

const TourDetails = ({ tour }) => {
  if (tour) {
    const quickFacts = [
      {
        icon: "calendar",
        text: "Next date",
        info: new Date(tour.startDates[0]).toLocaleString("en-us", {
          month: "long",
          year: "numeric",
        }),
      },
      {
        icon: "trending-up",
        text: "difficulty",
        info: tour.difficulty,
      },
      {
        icon: "user",
        text: "Participants",
        info: `${tour.maxGroupSize} people`,
      },
      {
        icon: "star",
        text: "Rating",
        info: `${tour.ratingsAverage} / 5`,
      },
    ];
    const guides = tour.guides.map((guide) => ({
      src: `/img/users/${guide.photo}`,
      alt: guide.name,
      text: guide.role.replaceAll("-", " "),
      info: guide.name,
    }));

    return (
      <>
        <Backdrop tour={tour} />

        <Main>
          <Section $about>
            <Wrapper $column $details>
              <DetailsCard title="Quick facts" data={quickFacts} />
              <DetailsCard title="Your tour guides" data={guides} />
            </Wrapper>

            <Wrapper $column $details>
              <SecondaryHeading>{`About ${tour.name}`}</SecondaryHeading>
              {tour.description.split("\n").map((p, index) => (
                <Paragraph $italic key={index}>
                  {p}
                </Paragraph>
              ))}
            </Wrapper>
          </Section>

          <Section $images>
            {tour.images.map((img, index) => (
              <Img
                $gallery
                key={index}
                src={`/img/tours/${img}`}
                alt={`${tour.name} tour ${index + 1}`}
              />
            ))}
          </Section>

          <CustomMap locations={tour.locations} />

          <Section $reviews>
            {tour.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </Section>

          <Section $cta>
            <Wrapper $cta>
              <Img $cta $round src="/img/logo-white.png" alt="Natours Logo" />
              <Img
                $cta
                $round
                src={`/img/tours/${tour.images[1]}`}
                alt="Tour picture"
              />
              <Img
                $cta
                $round
                src={`/img/tours/${tour.images[2]}`}
                alt="Tour picture"
              />
            </Wrapper>

            <Wrapper $column $end>
              <SecondaryHeading>What are you waiting for?</SecondaryHeading>
              <Paragraph
                $italic
                $contrast
              >{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</Paragraph>
              <StyledLink to="/" $cta>
                Book tour now!
              </StyledLink>
            </Wrapper>
          </Section>
        </Main>
      </>
    );
  }
};

export default TourDetails;
