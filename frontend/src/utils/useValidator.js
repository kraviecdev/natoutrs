import { useState } from "react";

const useValidator = (initialState) => {
  const [data, setData] = useState(initialState);

  const handleChange = (name, event) => {
    const val = event.target.value;
    const newData = [...data];
    const field = newData.find((field) => field.name === name);

    if (field) {
      if (field.name === "checkbox") {
        field.checked = !field.checked;
        field.validation = field.checked;
      } else {
        field.value = val;
        field.validation = field.regex.test(val);
      }
    }

    setData(newData);
  };

  return { data, handleChange };
};

export default useValidator;
