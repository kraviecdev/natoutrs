import { InputWrapper, StyledInput, StyledLabel } from "../styled.js";
import { forwardRef, useEffect, useRef, useState } from "react";
import Img from "../../Img/index.jsx";
import { Paragraph } from "../../Paragraph/index.js";

const File = forwardRef(({ label, avatarPath, errorText, ...params }, ref) => {
  const [avatar, setAvatar] = useState("/img/users/default.jpg");

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);

    setAvatar(preview);
  };

  useEffect(() => {
    if (!!avatarPath) {
      setAvatar(avatarPath);
    }
  }, [avatarPath]);

  return (
    <InputWrapper $file onChange={handleOnChange}>
      {avatar && <Img $round $settings src={avatar} />}
      <StyledLabel htmlFor="file">{label}</StyledLabel>
      <StyledInput ref={ref} {...params} id="file" />
      {errorText && (
        <Paragraph $italic $invalid>
          {errorText}
        </Paragraph>
      )}
    </InputWrapper>
  );
});

export default File;
