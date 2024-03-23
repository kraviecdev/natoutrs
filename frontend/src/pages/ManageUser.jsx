import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import { redirect, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/users/${params.id}`, data);
    toast.success("User updated successfully");
    return redirect("/settings");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const ManageUser = () => {
  const { data } = useLoaderData();
  const initialState = [
    {
      name: "name",
      type: "text",
      label: "Change user name",
      placeholder: "Example Name",
      as: "input",
      value: data.name,
      validation: true,
      regex: /[a-zA-Z0-9]{3,}/,
    },
    {
      name: "email",
      type: "email",
      label: "Change user email address",
      placeholder: "you@example.com",
      as: "input",
      value: data.email,
      validation: true,
      regex:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: "Enter correct email address",
    },
    {
      name: "role",
      type: "select",
      label: "Change role",
      as: "select",
      select: true,
      value: data.role,
      options: ["user", "guide", "lead-guide", "admin"],
      validation: true,
    },
  ];

  return (
    <PageForm
      method="patch"
      initialState={initialState}
      heading={`Manage ${data.name}`}
      button="Submit"
    />
  );
};

export default ManageUser;
