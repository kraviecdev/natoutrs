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

  return <ManageList title="Manage rewiews" data={data} />;
};

export default MyReviews;
