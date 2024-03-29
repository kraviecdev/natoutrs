import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { redirect, useOutletContext } from "react-router-dom";
import { SecondaryHeading } from "../components/common/Title/index.js";
import PageForm from "../components/PageForm/index.jsx";

export const action = async ({ request }) => {
  const formData = await request.formData();

  try {
    await customFetch.patch("/users/update-my-data", formData);
    toast.success("Your data has been updated");
    return redirect("/settings");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const MangeMyData = () => {
  const user = useOutletContext();
  const initialState = [
    {
      label: "Your new account photo",
      props: {
        accept: "image/*",
        multiple: false,
        as: "file",
        value: undefined,
        name: "photo",
        type: "file",
      },
      src: `/img/users/${user.photo}`,
      alt: user.name,
    },
    {
      label: "Name",
      message: "Name must have at least 3 characters",
      props: {
        as: "input",
        value: user.name,
        maxLength: 20,
        minLength: 3,
        autoComplete: "on",
        name: "name",
        placeholder: user.name,
        required: true,
        type: "text",
      },
    },
    {
      label: "Email address",
      message: "Enter correct email address",
      props: {
        as: "input",
        value: user.email,
        autoComplete: "on",
        name: "email",
        placeholder: user.email,
        required: true,
        type: "email",
        pattern:
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      },
    },
  ];

  return (
    <>
      <SecondaryHeading>Edit your account</SecondaryHeading>
      <PageForm
        method="patch"
        encType="multipart/form-data"
        initialState={initialState}
        button="Save changes"
        $second
      />
    </>
  );
};

export default MangeMyData;
