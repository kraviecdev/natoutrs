import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import ManageList from "../components/ManageList/index.jsx";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/reviews/my-reviews");
    return data;
  } catch (error) {
    return error;
  }
};

const MyReviews = () => {
  const { data } = useLoaderData();

  const input = data.map((item) => ({
    id: item._id,
    route: `manage-review`,
    src: `/img/users/${item.user.photo}`,
    alt: item.user.name,
    info: `rating ${item.rating}/5`,
    additional: item.review,
  }));

  return <ManageList title="Manage my rewiews" input={input} />;
};

export default MyReviews;
