import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/users/signup", data);
    toast.success("You are signed up");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const Signup = () => {
  const initialState = [
    {
      name: "name",
      type: "text",
      label: "Your Name",
      placeholder: "Example Name",
      as: "input",
      value: "",
      validation: true,
      regex: /[a-zA-Z0-9]{3,}/,
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email address",
      placeholder: "you@example.com",
      as: "input",
      value: "",
      validation: true,
      regex:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: "Enter correct email address",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
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
      label: "Confirm Password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      message: "Passwords must be the same",
      required: true,
    },
  ];

  return (
    <Main>
      <PageForm
        method="post"
        heading="Sign up to Natours"
        button="Sign Up"
        initialState={initialState}
      />
    </Main>
  );
};

export default Signup;
