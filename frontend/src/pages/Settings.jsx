import { FormButton, StyledForm } from "../components/Form/index.js";
import { useUserContext } from "./Home.jsx";
import FormRow from "../components/FormRow/index.jsx";
import useValidator from "../utils/useValidator.js";
import { SecondaryHeading } from "../components/Title/index.js";

const Settings = () => {
  const user = useUserContext();
  const initialState = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: user.name,
      as: "input",
      value: user.name,
      validation: true,
      regex: /[a-zA-Z0-9]{3,}/,
    },
    {
      name: "email",
      type: "email",
      label: "Email address",
      placeholder: user.email,
      as: "input",
      value: user.email,
      validation: true,
      regex:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: "Enter correct email address",
    },
  ];

  const { data, handleChange } = useValidator(initialState);

  return (
    <StyledForm $settings>
      <SecondaryHeading>Edit your account</SecondaryHeading>
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
      <FormButton type="submit">Update settings</FormButton>
    </StyledForm>
  );
};

export default Settings;
