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
    id: item._id,
    route: `manage-user`,
    src: `/img/users/${item.photo}`,
    info: item.name,
    context: `Role: ${item.role.toUpperCase()}`,
    additional: item.email,
  }));

  return <ManageList title="Manage users" input={input} />;
};

export default AllUsers;
