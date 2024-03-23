import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import PageForm from "../components/PageForm/index.jsx";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/users/update-my-pass", data);
    toast.success("Password has been updated");
    return redirect("/settings");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ChangePass = () => {
  const initialState = [
    {
      name: "passwordCurrent",
      type: "password",
      label: "Current password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "New password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Min password length is 8 characters and digits",
      required: true,
    },
    {
      name: "passwordConfirm",
      type: "password",
      label: "Confirm new password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      message: "Passwords must be the same",
      required: true,
    },
  ];

  return (
    <PageForm
      method="patch"
      initialState={initialState}
      heading="Update your password"
      button="Update password"
    />
  );
};

export default ChangePass;
