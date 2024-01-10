import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch.js";
import { useLoaderData, useParams } from "react-router-dom";
import DetailBox from "../components/DetailBox/index.jsx";
import ReviewCard from "../components/ReviewCard/index.jsx";
import Map from "../components/Map/index.jsx";
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/tours/${params.slug}`);
    return data;
  } catch (error) {
    return error;
  }
};

const TourDetails = () => {
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
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay">&nbsp;</div>
            <img
              className="header__hero-img"
              src={`/img/tours/${tour.imageCover}`}
              alt={tour.name}
            />
          </div>

          <div className="heading-box">
            <h1 className="heading-primary">
              <span>{tour.name}</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use href="/img/icons.svg#icon-clock" />
                </svg>
                <span className="heading-box__text">{`${tour.duration} days`}</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use href="/img/icons.svg#icon-map-pin" />
                </svg>
                <span className="heading-box__text">
                  {tour.startLocation.description}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

                <DetailBox icon="calendar" label="Next date" text={date} />
                <DetailBox
                  icon="trending-up"
                  label="Difficulty"
                  text={tour.difficulty}
                />
                <DetailBox
                  icon="user"
                  label="Participants"
                  text={`${tour.maxGroupSize} people`}
                />
                <DetailBox
                  icon="star"
                  label="Rating"
                  text={`${tour.ratingsAverage} / 5`}
                />
              </div>

              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

                {tour.guides &&
                  tour.guides.map((guide, index) => (
                    <DetailBox
                      key={index}
                      src={`/img/users/${guide.photo}`}
                      alt={guide.name}
                      label={guide.role.replaceAll("-", " ")}
                      text={guide.name}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">{`About ${tour.name}`}</h2>

            {tour.description.split("\n").map((p, index) => (
              <p className="description__text" key={index}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="section-pictures">
          {tour.images.map((img, index) => (
            <div key={index} className="picture-box">
              <img
                className={`picture-box__img picture-box__img--${index + 1}`}
                src={`/img/tours/${img}`}
                alt={`${tour.name} tour ${index + 1}`}
              />
            </div>
          ))}
        </section>

        <section className="section-map">
          <Map locations={tour.locations} />
        </section>

        <section className="section-reviews">
          <div className="reviews">
            {tour.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </section>

        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="/img/logo-white.png" alt="Natours Logo" />
            </div>
            <img
              className="cta__img cta__img--1"
              src={`/img/tours/${tour.images[1]}`}
              alt="Tour picture"
            />
            <img
              className="cta__img cta__img--2"
              src={`/img/tours/${tour.images[2]}`}
              alt="Tour picture"
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
              <button className="btn btn--green span-all-rows">
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default TourDetails;
