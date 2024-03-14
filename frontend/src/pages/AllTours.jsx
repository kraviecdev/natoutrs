import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import ManageList from "../components/ManageList/index.jsx";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/tours");
    return data;
  } catch (error) {
    return error;
  }
};
const AllTours = () => {
  const { data } = useLoaderData();

  const input = data.map((item) => ({
    id: item.id,
    src: `/img/tours/${item.imageCover}`,
    alt: item.name,
    info: `price ${item.price}$`,
    additional: item.summary,
  }));

  return <ManageList title="Manage tours" input={input} />;
};

export default AllTours;
