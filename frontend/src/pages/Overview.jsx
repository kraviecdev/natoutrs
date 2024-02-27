import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import TourCard from "../components/TourCard/index.jsx";
import { Section } from "../components/common/Section/index.js";

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

  return (
    <Section>
      {data && data.map((tour, index) => <TourCard key={index} tour={tour} />)}
    </Section>
  );
};

export default Overview;
