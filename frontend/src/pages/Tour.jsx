import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { MainHeading, SecondaryHeading } from "../components/Title/index.js";
import { Wrapper } from "../components/Wrapper/index.js";
import { Main } from "../components/Main/index.js";
import { Paragraph } from "../components/Paragraph/index.js";
import { Section } from "../components/Section/index.js";
import { StyledLink } from "../components/Link/index.js";
import ReviewCard from "../components/ReviewCard/index.jsx";
import CustomMap from "../components/Map/index.jsx";
import DetailBox from "../components/DetailBox/index.jsx";
import Icon from "../components/Icon/Icon.jsx";
import Img from "../components/Img/index.jsx";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/tours/${params.slug}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Tour = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = `Natours | ${data.title}`;
  }, [data]);

  const tour = data.tour;

  if (tour) {
    const date = new Date(tour.startDates[0]).toLocaleString("en-us", {
      month: "long",
      year: "numeric",
    });

    return (
      <>
        <Wrapper $backdrop>
          <Img
            $backdrop
            $shadow
            src={`/img/tours/${tour.imageCover}`}
            alt={tour.name}
          >
            <div className="heading">
              <MainHeading>{tour.name}</MainHeading>
              <Wrapper>
                <Icon name="clock" text={`${tour.duration} days`} />
                <Icon name="map-pin" text={tour.startLocation.description} />
              </Wrapper>
            </div>
          </Img>
        </Wrapper>

        <Main $column>
          <Section>
            <div>
              <Wrapper $column>
                <SecondaryHeading>Quick facts</SecondaryHeading>

                <DetailBox icon="calendar" text="Next date" info={date} />
                <DetailBox
                  icon="trending-up"
                  text="Difficulty"
                  info={tour.difficulty}
                />
                <DetailBox
                  icon="user"
                  text="Participants"
                  info={`${tour.maxGroupSize} people`}
                />
                <DetailBox
                  icon="star"
                  text="Rating"
                  info={`${tour.ratingsAverage} / 5`}
                />
              </Wrapper>

              <Wrapper $column>
                <SecondaryHeading>Your tour guides</SecondaryHeading>
                {tour.guides &&
                  tour.guides.map((guide, index) => (
                    <DetailBox
                      key={index}
                      src={`/img/users/${guide.photo}`}
                      alt={guide.name}
                      text={guide.role.replaceAll("-", " ")}
                      info={guide.name}
                    />
                  ))}
              </Wrapper>
            </div>
            <Wrapper $column>
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

          <Section>
            <CustomMap locations={tour.locations} />
          </Section>

          <Section $reviews>
            {tour.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </Section>

          <Section $cta>
            <Wrapper $cta>
              <Img $cta src="/img/logo-white.png" alt="Natours Logo" />
              <Img
                $cta
                src={`/img/tours/${tour.images[1]}`}
                alt="Tour picture"
              />
              <Img
                $cta
                src={`/img/tours/${tour.images[2]}`}
                alt="Tour picture"
              />
            </Wrapper>
            <Wrapper $column>
              <SecondaryHeading>What are you waiting for?</SecondaryHeading>
              <Paragraph
                $italic
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

export default Tour;
