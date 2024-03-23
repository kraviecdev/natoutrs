import { Input, RowWrapper } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";

const FormRow = ({
  as,
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  $invalid,
  select,
  opt,
  message,
  required,
}) => {
  return (
    <RowWrapper $valid={value !== "" && !$invalid} $invalid={$invalid}>
      <label>{label}</label>
      <Input
        as={as}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
      >
        {select &&
          opt.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </Input>
      {message && <Paragraph $invalid>{message}</Paragraph>}
    </RowWrapper>
  );
};

export default FormRow;
