import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";
import { z } from "zod";

const Signup = () => {
  const navigate = useNavigate();
  const signupState = [
    {
      name: "name",
      label: "Your Name",
      props: {
        type: "text",
        placeholder: "Example Name",
        as: "input",
      },
    },
    {
      name: "email",
      label: "Email address",
      props: {
        type: "email",
        placeholder: "you@example.com",
        as: "input",
      },
    },
    {
      name: "password",
      label: "Password",
      props: {
        type: "password",
        placeholder: "••••••••",
        as: "input",
      },
    },
    {
      name: "passwordConfirm",
      label: "Confirm Password",
      props: {
        type: "password",
        placeholder: "••••••••",
        as: "input",
      },
    },
  ];

  const signup = z
    .object({
      name: z.string().min(3).max(64),
      email: z.string().email(),
      password: z.string().min(8),
      passwordConfirm: z.string().min(8),
    })
    .required()
    .refine(
      (values) => {
        return values.password === values.passwordConfirm;
      },
      {
        message: "Passwords must be the same!",
        path: ["passwordConfirm"],
      },
    );

  const onSubmit = async (data) => {
    try {
      const response = await customFetch.post("/users/signup", data);

      if (response.status === 200) {
        toast.success("Signup successful");
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
        heading="Sign up to Natours"
        button="Sign Up"
        initialState={signupState}
        schema={signup}
        onSubmit={onSubmit}
      />
    </Main>
  );
};

export default Signup;
