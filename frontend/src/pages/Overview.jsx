import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { Main } from "../components/_assets/Main/index.js";
import { Section } from "../components/_assets/Section/index.js";
import TourCard from "../components/TourCard/index.jsx";
import { useEffect } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/tours");
    return data;
  } catch (error) {
    return error;
  }
};

const Overview = () => {
  const { data } = useLoaderData();

  useEffect(() => {
    document.title = "Natours | Exciting tours for adventurous people";
  }, []);

  return (
    <Main>
      <Section>
        {data &&
          data.map((tour, index) => <TourCard key={index} tour={tour} />)}
      </Section>
    </Main>
  );
};

export default Overview;
