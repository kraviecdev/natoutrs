import { Paragraph } from "../../Paragraph/index.js";
import { InputWrapper, StyledInput } from "../styled.js";
import { forwardRef } from "react";

const Input = forwardRef(({ label, errorText, valid, ...params }, ref) => {
  return (
    <InputWrapper $invalid={errorText} $valid={valid}>
      <label>{label}</label>
      <StyledInput ref={ref} {...params} />
      {errorText && (
        <Paragraph $italic $invalid>
          {errorText}
        </Paragraph>
      )}
    </InputWrapper>
  );
});

export default Input;
