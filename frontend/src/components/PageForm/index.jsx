import { FormButton, StyledForm } from "../common/Form/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import FormRow from "../common/FormRow/index.jsx";
import useValidator from "../../utils/useValidator.js";
import DragDrop from "../common/DragDrop/index.jsx";

const PageForm = ({
  method,
  encType,
  initialState,
  heading,
  button,
  children,
}) => {
  const { data, handleChange } = useValidator(initialState);

  return (
    <StyledForm method={method} encType={encType}>
      <SecondaryHeading>{heading}</SecondaryHeading>
      {data &&
        data.map((row, index) =>
          row.file ? (
            <DragDrop
              key={index}
              src={row.src}
              alt={row.alt}
              onChange={(event) => handleChange(row.name, event)}
              name={row.name}
              type={row.type}
              accept={row.accept}
              multiple={row.multiple}
            />
          ) : (
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
          ),
        )}
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
  );
};

export default PageForm;
