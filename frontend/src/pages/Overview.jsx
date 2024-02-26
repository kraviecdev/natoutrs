import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import TourCard from "../components/TourCard/index.jsx";

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
    data && data.map((tour, index) => <TourCard key={index} tour={tour} />)
  );
};

export default Overview;
