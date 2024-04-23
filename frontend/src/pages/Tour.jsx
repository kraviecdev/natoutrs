import { useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import TourDetails from "../components/TourDetails/index.jsx";
import { useQuery } from "@tanstack/react-query";

const Tour = () => {
  const params = useParams();

  const { data: tourDetails } = useQuery({
    queryKey: ["tourDetails"],
    queryFn: async () => {
      const { data } = await customFetch.get(`/tours/tour/${params.slug}`);
      return data;
    },
  });

  useEffect(() => {
    document.title = `Natours | ${tourDetails?.title}`;
  }, [tourDetails]);

  return <TourDetails tour={tourDetails?.tour} />;
};

export default Tour;
