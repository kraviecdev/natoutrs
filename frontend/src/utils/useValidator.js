import { useState } from "react";

const useValidator = (initialState) => {
  const [data, setData] = useState(initialState);

  const handleChange = (name, event) => {
    const val = event.target.value;
    const newData = [...data];
    const field = newData.find((field) => field.name === name);

    if (field) {
      if (field.name === "photo") {
        const files = event?.target?.files[0];

        field.alt = "Your new photo";
        field.src = URL.createObjectURL(files);
      } else {
        field.value = val;

        if (field.name === "passwordConfirm") {
          const password = newData.find((field) => field.name === "password");

          password.value === field.value
            ? (field.validation = true)
            : (field.validation = false);
        } else {
          field.validation = field.regex ? field.regex.test(val) : true;
        }
      }
    }

    setData(newData);
  };

  return { data, handleChange };
};

export default useValidator;
