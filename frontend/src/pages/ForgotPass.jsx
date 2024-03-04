import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { StyledLink } from "../components/common/Link/index.js";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/users/forgot-pass", data);
    toast.success("If email exists in Natours, you will get a message.");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const ForgotPass = () => {
  const initialState = [
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
    },
  ];

  return (
    <Main>
      <PageForm
        method="post"
        initialState={initialState}
        heading="Enter your email"
        button="Send"
      >
        <StyledLink $contrast to="/signup">
          Create new account
        </StyledLink>
      </PageForm>
    </Main>
  );
};

export default ForgotPass;
