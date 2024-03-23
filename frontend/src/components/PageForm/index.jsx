import { FormButton, StyledForm } from "../common/Form/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import FormRow from "../common/FormRow/index.jsx";
import useValidator from "../../utils/useValidator.js";
import DragDrop from "../common/DragDrop/index.jsx";
import { useEffect, useState } from "react";

const PageForm = ({
  method,
  encType,
  initialState,
  heading,
  button,
  children,
}) => {
  const { data, handleChange } = useValidator(initialState);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (data.some((obj) => obj.required === true)) {
      if (data.some((obj) => obj.value === "" || obj.validation === false)) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [data]);

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
              required={row.required}
              message={!row.validation && row.message}
              select={row.select}
              opt={row.options}
            />
          ),
        )}
      <FormButton disabled={disabled} type="submit">
        {button}
      </FormButton>
      {children}
    </StyledForm>
  );
};

export default PageForm;
