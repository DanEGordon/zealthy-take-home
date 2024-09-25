import React from "react";

interface Props {
  id: string;
  text: string;
  value: string;
  onInput: (x: string) => void;
}

const TextInput = ({ id, text, value, onInput }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        type="text"
        className="border-2"
        id={id}
        name={id}
        value={value}
        onChange={(e) => {
          onInput(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
