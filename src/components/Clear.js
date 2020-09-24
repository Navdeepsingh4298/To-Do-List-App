import React from "react";

function Clear(props) {
  return (
    <button onClick={props.clearList}>
      <span>Clear List</span>
    </button>
  );
}

export default Clear;