import { Main } from "../components/_assets/Main/index.js";
import { Wrapper } from "../components/_assets/Wrapper/index.js";
import { StyledLink } from "../components/_assets/Link/index.js";
import customFetch from "../utils/customFetch.js";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Form from "../components/_assets/Form/index.jsx";

const Login = () => {
  const navigate = useNavigate();
  const loginState = [
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "you@example.com",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
  ];

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const onSubmit = async (data, setError) => {
    try {
      const response = await customFetch.post("/users/login", data);
      if (response.status === 200) {
        return navigate("/");
      }
    } catch (error) {
      return setError("root", {
        type: error?.response?.statusText,
        message: error?.response?.data?.message,
      });
    }
  };

  return (
    <Main>
      <Form
        initialState={loginState}
        schema={loginSchema}
        onSubmit={onSubmit}
        heading="Log into your account"
        button="login"
      >
        <Wrapper $card $end>
          <StyledLink $contrast to="/signup">
            Create new account
          </StyledLink>
          <StyledLink $contrast to="/forgot-pass">
            forgot password
          </StyledLink>
        </Wrapper>
      </Form>
    </Main>
  );
};

export default Login;
