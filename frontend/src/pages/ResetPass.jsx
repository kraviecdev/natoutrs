import { redirect, useParams } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import PageForm from "../components/PageForm/index.jsx";
import { Main } from "../components/common/Main/index.js";
import { z } from "zod";

const ResetPass = () => {
  const params = useParams();
  const resetPassState = [
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

  const restPass = z
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

  const onSubmit = async (data) => {
    try {
      await customFetch.patch(`/users/reset-pass/${params.token}`, data);
      toast.success("Your password has been changed successfully");
      return redirect("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

  return (
    <Main>
      <PageForm
        initialState={resetPassState}
        schema={restPass}
        onSubmit={onSubmit}
        heading="Submit new password"
        button="Confirm"
      />
    </Main>
  );
};

export default ResetPass;
