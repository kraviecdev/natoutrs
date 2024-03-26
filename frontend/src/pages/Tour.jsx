import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import TourDetails from "../components/TourDetails/index.jsx";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/tours/tour/${params.slug}`);
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

  return <TourDetails tour={tour} />;
};

export default Tour;
