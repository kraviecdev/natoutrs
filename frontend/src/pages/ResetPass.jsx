import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import useValidator from "../utils/useValidator.js";
import { Main } from "../components/Main/index.js";
import { SecondaryHeading } from "../components/Title/index.js";
import { FormButton, StyledForm } from "../components/Form/index.js";
import FormRow from "../components/FormRow/index.jsx";
import { toast } from "react-toastify";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/users/reset-pass/${params.token}`, data);
    toast.success("Your password has been changed successfully");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const ResetPass = () => {
  const initialState = [
    {
      name: "password",
      type: "password",
      label: "Password",
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
      label: "Confirm Password",
      placeholder: "••••••••",
      as: "input",
      value: "",
      validation: true,
      message: "Passwords must be the same",
    },
  ];
  const { data, handleChange } = useValidator(initialState);

  return (
    <Main $column>
      <StyledForm method="patch">
        <SecondaryHeading>Change your password</SecondaryHeading>

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

        <FormButton
          disabled={data.some(
            (field) => field.validation === false || field.value === "",
          )}
          type="submit"
        >
          Change
        </FormButton>
      </StyledForm>
    </Main>
  );
};

export default ResetPass;
