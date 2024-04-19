import { Input, RowWrapper } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";

const FormRow = ({ label, errorText, valid, props, register }) => {
  return (
    <RowWrapper $invalid={errorText} $valid={valid}>
      <label>{label}</label>
      <Input {...register} {...props} />
      {errorText && (
        <Paragraph $italic $invalid>
          {errorText}
        </Paragraph>
      )}
    </RowWrapper>
  );
};

export default FormRow;
