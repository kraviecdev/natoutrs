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
  message,
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
        required
      />
      {message && <Paragraph invalid="true">{message}</Paragraph>}
    </RowWrapper>
  );
};

export default FormRow;
