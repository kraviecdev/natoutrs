import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import { redirect, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/reviews/${params.id}`);
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
    await customFetch.patch(`/reviews/${params.id}`, data);
    toast.success("Review updated successfully");
    return redirect("/settings");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const ManageReview = () => {
  const { data } = useLoaderData();

  const initialState = [
    {
      name: "review",
      type: "text",
      label: "Change your review",
      placeholder: "Example Review",
      as: "textarea",
      value: data.review,
      validation: true,
      regex: /[a-zA-Z0-9]{3,}/,
    },
    {
      name: "rating",
      type: "select",
      label: "Update rate",
      as: "select",
      select: true,
      value: data.rating,
      options: [1, 2, 3, 4, 5],
      validation: true,
    },
  ];

  return (
    <PageForm
      method="patch"
      initialState={initialState}
      heading={`${data.user.name} review`}
      button="Update"
    />
  );
};

export default ManageReview;
