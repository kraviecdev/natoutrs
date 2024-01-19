import { Input, RowWrapper } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";

const FormRow = ({
  as,
  label,
  type,
  placeholder,
  checked,
  value,
  onChange,
  name,
  invalid,
  checkbox,
  message,
}) => {
  return (
    <RowWrapper
      valid={value !== "" && !invalid}
      invalid={invalid}
      checkbox={checkbox}
    >
      <label>{label}</label>
      <Input
        as={as}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        checked={checked}
        name={name}
        type={type}
        required
      />
      {message && <Paragraph invalid>{message}</Paragraph>}
    </RowWrapper>
  );
};

export default FormRow;
