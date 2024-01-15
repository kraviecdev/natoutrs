import Card from "../components/Card/index.jsx";
import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import { Main } from "../components/Main/index.js";

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
    <Main>
      {data && data.map((tour, index) => <Card key={index} tour={tour} />)}
    </Main>
  );
};

export default Overview;
