import { useNavigate, useParams } from "react-router-dom";
import customFetch from "../../utils/customFetch.js";
import Form from "../../components/_assets/Form/index.jsx";
import { Main } from "../../components/_assets/Main/index.js";
import { z } from "zod";

const ResetPass = () => {
  const params = useParams();
  const navigate = useNavigate();
  const resetPassState = [
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

  const restPassSchema = z
    .object({
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

  const onSubmit = async (data, setError) => {
    try {
      const response = await customFetch.patch(
        `/users/reset-pass/${params.token}`,
        data,
      );
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
        initialState={resetPassState}
        schema={restPassSchema}
        onSubmit={onSubmit}
        heading="Submit new password"
        button="Confirm"
      />
    </Main>
  );
};

export default ResetPass;
