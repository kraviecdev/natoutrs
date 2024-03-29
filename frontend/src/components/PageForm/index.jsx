import { FormButton, StyledForm } from "../common/Form/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import FormRow from "../common/FormRow/index.jsx";
import DragDrop from "../common/DragDrop/index.jsx";
import { useRef, useState } from "react";

const PageForm = ({
  method,
  encType,
  $second,
  initialState,
  heading,
  button,
  children,
}) => {
  const formRef = useRef();
  const [disabled, setDisabled] = useState(false);

  const onFormChange = () => {
    const form = formRef.current;

    const anyInvalid = Array.from(form.elements).some((element) => {
      return element.nodeName === "INPUT" && !element.validity.valid;
    });

    anyInvalid ? setDisabled(true) : setDisabled(false);
  };

  return (
    <StyledForm
      ref={formRef}
      onChange={onFormChange}
      method={method}
      encType={encType}
      $second={$second}
    >
      {heading && <SecondaryHeading>{heading}</SecondaryHeading>}
      {initialState &&
        initialState.map((row, index) =>
          row.props.type === "file" ? (
            <DragDrop key={index} row={row} />
          ) : (
            <FormRow key={index} row={row} />
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
