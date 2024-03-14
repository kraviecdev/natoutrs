import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import ManageList from "../components/ManageList/index.jsx";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/reviews");
    return data;
  } catch (error) {
    return error;
  }
};
const MyReviews = () => {
  const { data } = useLoaderData();

  const input = data.map((item) => ({
    id: item.id,
    src: `/img/users/${item.user.photo}`,
    alt: item.user.name,
    info: `rating ${item.rating}/5`,
    additional: item.review,
    tour: `Tour: ${item.tour.name}`,
  }));

  return <ManageList title="Manage rewiews" input={input} />;
};

export default MyReviews;
