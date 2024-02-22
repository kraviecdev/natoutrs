import { FormButton, StyledForm } from "../components/Form/index.js";
import FormRow from "../components/FormRow/index.jsx";
import useValidator from "../utils/useValidator.js";
import { SecondaryHeading } from "../components/Title/index.js";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/users/update-my-pass", data);
    toast.success("Password has been updated");
    return redirect("/me");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ChangePass = () => {
  const initialState = [
    {
      name: "passwordCurrent",
      type: "password",
      label: "Current password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    },
    {
      name: "password",
      type: "password",
      label: "New password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Min password length is 8 characters and digits",
    },
    {
      name: "passwordConfirm",
      type: "password",
      label: "Confirm new password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      message: "Passwords must be the same",
    },
  ];

  const { data, handleChange } = useValidator(initialState);

  return (
    <StyledForm $settings method="patch">
      <SecondaryHeading>Update your password</SecondaryHeading>
      {data &&
        data.map((field, index) => (
          <FormRow
            key={index}
            as={field.as}
            placeholder={field.placeholder}
            type={field.type}
            label={field.label}
            name={field.name}
            value={field.value || ""}
            onChange={(event) => handleChange(field.name, event)}
            $invalid={!field.validation}
            message={field.message}
          />
        ))}
      <FormButton type="submit">Update</FormButton>
    </StyledForm>
  );
};

export default ChangePass;
