import { InputWrapper, StyledInput, StyledLabel } from "../styled.js";
import { forwardRef, useRef, useState } from "react";
import Img from "../../Img/index.jsx";
import { Paragraph } from "../../Paragraph/index.js";

const File = forwardRef(({ label, errorText, ...params }, ref) => {
  const [avatar, setAvatar] = useState("img/users/default.jpg");

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);

    setAvatar(preview);
  };

  return (
    <InputWrapper $file onChange={handleOnChange}>
      {avatar && <Img $settings $round src={avatar} />}
      <StyledLabel htmlFor="file">{label}</StyledLabel>
      <StyledInput ref={ref} {...params} />
      {errorText && (
        <Paragraph $italic $invalid>
          {errorText}
        </Paragraph>
      )}
    </InputWrapper>
  );
});

export default File;
