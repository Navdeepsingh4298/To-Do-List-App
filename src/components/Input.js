import React, { useState } from "react";
import Add from "./Add";
import Clear from "./Clear";

function Input(props) {

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <span>
        <input onChange={handleChange} type="text" value={inputText} />
        <Add
          inputText={inputText}
          addItem={props.addItem}
          setInputText={setInputText}
        />
        <Clear
          clearList={props.clearList}
        />
      </span>
    </div>
  );
}

export default Input;