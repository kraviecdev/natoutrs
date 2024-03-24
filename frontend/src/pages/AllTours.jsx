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
    id: item._id,
    route: `manage-tour`,
    src: `/img/tours/${item.imageCover}`,
    info: item.name,
    additional: item.summary,
    context: `Price ${item.price}$`,
  }));

  return <ManageList title="Manage tours" input={input} />;
};

export default AllTours;
