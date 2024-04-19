import { Main } from "../components/common/Main/index.js";
import { Wrapper } from "../components/common/Wrapper/index.js";
import { StyledLink } from "../components/common/Link/index.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import customFetch from "../utils/customFetch.js";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginState = [
    {
      label: "Email address",
      name: "email",
      props: {
        type: "email",
        placeholder: "you@example.com",
        as: "input",
      },
    },
    {
      label: "Password",
      name: "password",
      props: {
        type: "password",
        placeholder: "••••••••",
        as: "input",
      },
    },
  ];

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const onSubmit = async (data) => {
    try {
      const response = await customFetch.post("/users/login", data);
      if (response.status === 200) {
        toast.success("Login successful");
        return navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

  return (
    <Main>
      <PageForm
        onSubmit={onSubmit}
        schema={loginSchema}
        initialState={loginState}
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
