import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/customFetch.js";
import { Main } from "../components/_assets/Main/index.js";
import { Section } from "../components/_assets/Section/index.js";
import TourCard from "../components/TourCard/index.jsx";

const Overview = () => {
  const { data: toursData } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const { data } = await customFetch.get("/tours");
      return data;
    },
  });

  useEffect(() => {
    document.title = "Natours | Exciting tours for adventurous people";
  }, []);

  return (
    <Main>
      <Section>
        {toursData &&
          toursData.data.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
      </Section>
    </Main>
  );
};

export default Overview;
