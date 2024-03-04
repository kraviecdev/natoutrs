import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch.js";
import { Wrapper } from "../components/common/Wrapper/index.js";
import { StyledLink } from "../components/common/Link/index.js";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/users/login", data);
    toast.success("Login successful");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const Login = () => {
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
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    },
  ];

  return (
    <Main>
      <PageForm
        method="post"
        initialState={initialState}
        heading="Log into your account"
        button="login"
      >
        <Wrapper $card $end>
          <StyledLink $contrast to="/signup">
            Create new account
          </StyledLink>
          <StyledLink $contrast to="/forgot-pass">
            reset password
          </StyledLink>
        </Wrapper>
      </PageForm>
    </Main>
  );
};

export default Login;
