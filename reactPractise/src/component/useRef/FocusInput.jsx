import { useRef } from "react";

const FocusInput = () => {
  const inputField = useRef(null);

  const focusInput = () => {
    if (inputField) {
      inputField.current.focus();
      inputField.current.value = "ayush";
    }
  };

  return (
    <div>
      <input type="text" ref={inputField} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
};

export default FocusInput;
