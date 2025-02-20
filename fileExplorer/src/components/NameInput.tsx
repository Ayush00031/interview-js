import { useState } from "react";

const NameInput: React.FC<{
  intialValue: string;
  onSave: (name: string) => void;
  errorMessage: string;
}> = ({ intialValue, onSave, errorMessage }) => {
  const [name, setName] = useState(intialValue);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => onSave(name)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSave(name);
        }}
        autoFocus
      />
      {errorMessage && (
        <div
          style={{
            color: "red",
            fontSize: "12px",
          }}
        >
          {errorMessage}{" "}
        </div>
      )}
    </div>
  );
};

export default NameInput;
