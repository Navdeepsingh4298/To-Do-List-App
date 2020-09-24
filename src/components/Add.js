import React from "react";

function Add(props) {
  return (
    <button onClick={() => {
      props.addItem(props.inputText);
      props.setInputText("");
    }}>
      <span>Add</span>
    </button>
  );
}

export default Add;


