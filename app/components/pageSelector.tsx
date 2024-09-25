import React from "react";

interface Props {
  id: string;
  text: string;
  checkedValue: string;
  onInput: (x: string) => void;
}

const PageSelector = ({ id, text, checkedValue, onInput }: Props) => {
  return (
    <fieldset className="m-4 text-center">
      <legend>{text}</legend>
      <input
        type="radio"
        id={{ id } + "Two"}
        name={id}
        value="2"
        onChange={(e) => {
          onInput(e.target.value);
        }}
        checked={checkedValue === "2"}
      />
      <label htmlFor={{ id } + "Two"}>Page Two</label>
      <input
        type="radio"
        id={{ id } + "three"}
        name={id}
        value="3"
        onChange={(e) => {
          onInput(e.target.value);
        }}
        checked={checkedValue === "3"}
      />
      <label htmlFor={{ id } + "three"}>Page Three</label>
    </fieldset>
  );
};

export default PageSelector;
