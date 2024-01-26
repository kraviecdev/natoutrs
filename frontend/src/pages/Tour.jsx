import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import DetailBox from "../components/DetailBox/index.jsx";
import Icon from "../components/Icon/Icon.jsx";
import Img from "../components/Img/index.jsx";
import { MainHeading, SecondaryHeading } from "../components/Title/index.js";
import { Wrapper } from "../components/Wrapper/index.js";
import { Main } from "../components/Main/index.js";
import { Paragraph } from "../components/Paragraph/index.js";
import { Section } from "../components/Section/index.js";
import Map from "../components/Map/index.jsx";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/tours/${params.slug}`);
    return data;
  } catch (error) {
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
        <Wrapper backdrop>
          <Img
            backdrop
            shadow
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

        <Main column>
          <Section>
            <div>
              <Wrapper column>
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

              <Wrapper column>
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
            <Wrapper column>
              <SecondaryHeading>{`About ${tour.name}`}</SecondaryHeading>
              {tour.description.split("\n").map((p, index) => (
                <Paragraph italic key={index}>
                  {p}
                </Paragraph>
              ))}
            </Wrapper>
          </Section>

          <Section images>
            {tour.images.map((img, index) => (
              <Img
                gallery
                key={index}
                src={`/img/tours/${img}`}
                alt={`${tour.name} tour ${index + 1}`}
              />
            ))}
          </Section>

          <Section>
            <Map locations={tour.locations} />
          </Section>

          {/*<section className="section-reviews">*/}
          {/*  <div className="reviews">*/}
          {/*    {tour.reviews.map((review, index) => (*/}
          {/*      <ReviewCard key={index} review={review} />*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/*<section className="section-cta">*/}
          {/*  <div className="cta">*/}
          {/*    <div className="cta__img cta__img--logo">*/}
          {/*      <img src="/img/logo-white.png" alt="Natours Logo" />*/}
          {/*    </div>*/}
          {/*    <img*/}
          {/*      className="cta__img cta__img--1"*/}
          {/*      src={`/img/tours/${tour.images[1]}`}*/}
          {/*      alt="Tour picture"*/}
          {/*    />*/}
          {/*    <img*/}
          {/*      className="cta__img cta__img--2"*/}
          {/*      src={`/img/tours/${tour.images[2]}`}*/}
          {/*      alt="Tour picture"*/}
          {/*    />*/}
          {/*    <div className="cta__content">*/}
          {/*      <h2 className="heading-secondary">What are you waiting for?</h2>*/}
          {/*      <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>*/}
          {/*      <button className="btn btn--green span-all-rows">*/}
          {/*        Book tour now!*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}
        </Main>
      </>
    );
  }
};

export default Tour;
