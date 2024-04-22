import customFetch from "../utils/customFetch.js";
import { Main } from "../components/_assets/Main/index.js";
import { StyledLink } from "../components/_assets/Link/index.js";
import Form from "../components/_assets/Form/index.jsx";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const forgotPassState = [
    {
      name: "email",
      label: "Email address",
      type: "email",
      placeholder: "you@example.com",
      value: "",
    },
  ];

  const forgotPassSchema = z
    .object({
      email: z.string().email(),
    })
    .required();

  const onSubmit = async (data, setError) => {
    try {
      const response = await customFetch.post("/users/forgot-pass", data);

      if (response.status === 201) {
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
        initialState={forgotPassState}
        schema={forgotPassSchema}
        onSubmit={onSubmit}
        heading="Enter your email"
        button="Send request"
      >
        <StyledLink $contrast to="/signup">
          Create new account
        </StyledLink>
      </Form>
    </Main>
  );
};

export default ForgotPass;
