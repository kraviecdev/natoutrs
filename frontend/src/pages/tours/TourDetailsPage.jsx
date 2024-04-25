import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import customFetch from "../../utils/customFetch.js";
import { selectTourDetails, setTourDetails } from "./toursSlice.js";
import TourDetails from "../../components/TourDetails/index.jsx";

const TourDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tour = useSelector(selectTourDetails);

  console.log();

  const { data } = useQuery({
    queryKey: ["tourDetails"],
    queryFn: async () => {
      const { data } = await customFetch.get(`/tours/tour/${params.slug}`);
      return data;
    },
  });

  useEffect(() => {
    if (!!data) {
      dispatch(setTourDetails(data.tour));
      document.title = `Natours | ${data.title}`;
    }
  }, [data]);

  if (!!tour) return <TourDetails tour={tour} />;
};

export default TourDetailsPage;
