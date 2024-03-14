import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import ManageList from "../components/ManageList/index.jsx";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users");
    return data;
  } catch (error) {
    return error;
  }
};
const AllUsers = () => {
  const { data } = useLoaderData();

  const input = data.map((item) => ({
    id: item.id,
    src: `/img/users/${item.photo}`,
    alt: item.name,
    info: `role: ${item.role}`,
    additional: item.email,
  }));

  return <ManageList title="Manage users" input={input} />;
};

export default AllUsers;
