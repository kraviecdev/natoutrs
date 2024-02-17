import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import useValidator from "../utils/useValidator.js";
import { Main } from "../components/Main/index.js";
import { SecondaryHeading } from "../components/Title/index.js";
import { FormButton, StyledForm } from "../components/Form/index.js";
import FormRow from "../components/FormRow/index.jsx";
import { toast } from "react-toastify";
import { Paragraph } from "../components/Paragraph/index.js";
import { Wrapper } from "../components/Wrapper/index.js";
import { StyledLink } from "../components/Link/index.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/users/forgot-pass", data);
    toast.success(
      "If email exists in our database, you will receive message with link to password change",
    );
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const ForgotPass = () => {
  const initialState = [
    {
      name: "email",
      type: "email",
      label: "Email address",
      placeholder: "you@example.com",
      as: "input",
      value: "",
      validation: true,
      regex:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
  ];

  const { data, handleChange } = useValidator(initialState);

  return (
    <Main $column>
      <StyledForm method="post">
        <SecondaryHeading>Enter your email</SecondaryHeading>

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
            />
          ))}

        <FormButton
          disabled={data.some(
            (field) => field.validation === false || field.value === "",
          )}
          type="submit"
        >
          Send
        </FormButton>

        <Wrapper $center>
          <Paragraph>Not a member yet?</Paragraph>
          <StyledLink $contrast to="/signup">
            Sign up
          </StyledLink>
        </Wrapper>
      </StyledForm>
    </Main>
  );
};

export default ForgotPass;
