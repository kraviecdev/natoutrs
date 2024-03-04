import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { Paragraph } from "../components/common/Paragraph/index.js";
import { Wrapper } from "../components/common/Wrapper/index.js";
import { StyledLink } from "../components/common/Link/index.js";
import PageForm from "../components/PageForm/index.jsx";

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
    <PageForm
      method="post"
      initialState={initialState}
      heading="Enter your email"
      button="Send"
    >
      <Wrapper $center>
        <Paragraph>Not a member yet?</Paragraph>
        <StyledLink $contrast to="/signup">
          Sign up
        </StyledLink>
      </Wrapper>
    </PageForm>
  );
};

export default ForgotPass;
