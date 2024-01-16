import { Input, RowWrapper } from "./styled.js";

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
    </RowWrapper>
  );
};

export default FormRow;
