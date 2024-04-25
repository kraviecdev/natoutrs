import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch.js";
import { Main } from "../../components/_assets/Main/index.js";
import Form from "../../components/_assets/Form/index.jsx";
import { z } from "zod";

const Signup = () => {
  const navigate = useNavigate();
  const signupState = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Example Name",
      value: "",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      placeholder: "you@example.com",
      value: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
    {
      name: "passwordConfirm",
      label: "Confirm Password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
  ];

  const signupSchema = z
    .object({
      name: z.string().min(3).max(64),
      email: z.string().email(),
      password: z.string().min(8),
      passwordConfirm: z.string().min(8),
    })
    .refine(
      (values) => {
        return values.password === values.passwordConfirm;
      },
      {
        message: "Passwords must be the same!",
        path: ["passwordConfirm"],
      },
    );

  const onSubmit = async (data, setError) => {
    try {
      const response = await customFetch.post("/users/signup", data);

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
        initialState={signupState}
        schema={signupSchema}
        onSubmit={onSubmit}
        heading="Sign up to Natours"
        button="Sign Up"
      />
    </Main>
  );
};

export default Signup;
