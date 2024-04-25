import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../../utils/customFetch.js";
import { Main } from "../../components/_assets/Main/index.js";
import { Section } from "../../components/_assets/Section/index.js";
import TourCard from "../../components/TourCard/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTours, setTours } from "./toursSlice.js";

const AllTours = () => {
  const dispatch = useDispatch();
  const tours = useSelector(selectTours);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const { data } = await customFetch.get("/tours");
      return data;
    },
  });

  useEffect(() => {
    if (tours.length <= 0 && !!data) {
      dispatch(setTours(data.data));
    }

    document.title = "Natours | Exciting tours for adventurous people";
  }, [tours, data]);

  return (
    <Main>
      <Section>
        {tours &&
          tours.map((tour, index) => <TourCard key={index} tour={tour} />)}
      </Section>
    </Main>
  );
};

export default AllTours;
