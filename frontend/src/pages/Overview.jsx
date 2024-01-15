import Card from "../components/Card/index.jsx";
import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";

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
    <main>
      {data && data.map((tour, index) => <Card key={index} tour={tour} />)}
    </main>
  );
};

export default Overview;
