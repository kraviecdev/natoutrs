import { Input, RowWrapper } from "./styled.js";
import { Paragraph } from "../Paragraph/index.js";
import { useState } from "react";

const FormRow = ({ row }) => {
  const [value, setValue] = useState(row.props.value || "");

  return (
    <RowWrapper>
      <label>{row.label}</label>
      <Input
        {...row.props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {row.option &&
          row.option.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </Input>
      {row.message && (
        <Paragraph $italic $invalid>
          {row.message}
        </Paragraph>
      )}
    </RowWrapper>
  );
};

export default FormRow;
