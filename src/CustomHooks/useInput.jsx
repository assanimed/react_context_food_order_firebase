import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(value);
  const valueInputIsInValid = isTouched && !valueIsValid;

  const handleInputChanges = (e) => setValue(e.target.value);

  const handleInputBlur = () => setIsTouched(true);
  const resetInput = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    setIsTouched,
    setValue,
    resetInput,
    valueInputIsInValid,
    handleInputChanges,
    handleInputBlur,
  };
};

export default useInput;
