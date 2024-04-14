import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { StyledLink } from "../components/common/Link/index.js";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";
import { z } from "zod";

const ForgotPass = () => {
  const forgotPassState = [
    {
      name: "email",
      label: "Email address",
      props: {
        type: "email",
        placeholder: "you@example.com",
        as: "input",
      },
    },
  ];

  const forgotPass = z
    .object({
      email: z.string().email(),
    })
    .required();

  const onSubmit = async (data) => {
    try {
      const response = await customFetch.post("/users/forgot-pass", data);
      return toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

  return (
    <Main>
      <PageForm
        initialState={forgotPassState}
        schema={forgotPass}
        onSubmit={onSubmit}
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
