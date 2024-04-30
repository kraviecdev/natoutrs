import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch.js";
import Form from "../../components/_assets/Form/index.jsx";
import { z } from "zod";

const UpdateMyPassword = () => {
  const navigate = useNavigate();
  const updateMyPasswordState = [
    {
      name: "passwordCurrent",
      label: "Current password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
    {
      name: "password",
      label: "New password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
    {
      name: "passwordConfirm",
      label: "Confirm new password",
      type: "password",
      placeholder: "••••••••",
      value: "",
    },
  ];

  const updateMyPasswordSchema = z
    .object({
      passwordCurrent: z.string().min(8),
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
      const response = await customFetch.patch(`/users/reset-pass`, data);
      if (response.status === 200) {
        return navigate("/settings");
      }
    } catch (error) {
      return setError("root", {
        type: error?.response?.statusText,
        message: error?.response?.data?.message,
      });
    }
  };

  return (
    <Form
      $second
      initialState={updateMyPasswordState}
      schema={updateMyPasswordSchema}
      onSubmit={onSubmit}
      heading="Update your password"
      button="save changes"
    />
  );
};

export default UpdateMyPassword;
