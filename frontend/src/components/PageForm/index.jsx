import { FormButton, StyledForm } from "../common/Form/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import FormRow from "../common/FormRow/index.jsx";
import useValidator from "../../utils/useValidator.js";
import { Wrapper } from "../common/Wrapper/index.js";

const PageForm = ({ method, initialState, heading, button, children }) => {
  const { data, handleChange } = useValidator(initialState);

  return (
    <Wrapper $center>
      <StyledForm method={method}>
        <SecondaryHeading>{heading}</SecondaryHeading>
        {data &&
          data.map((row, index) => (
            <FormRow
              key={index}
              label={row.label}
              as={row.as}
              value={row.value || ""}
              onChange={(event) => handleChange(row.name, event)}
              placeholder={row.placeholder}
              name={row.name}
              type={row.type}
              $invalid={!row.validation}
            />
          ))}
        <FormButton
          disabled={data.some(
            (field) => field.validation === false || field.value === "",
          )}
          type="submit"
        >
          {button}
        </FormButton>
        {children}
      </StyledForm>
    </Wrapper>
  );
};

export default PageForm;
