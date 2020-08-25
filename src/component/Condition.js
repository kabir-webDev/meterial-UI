import React from "react";
import { useState } from "react";

function Condition() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log("Clicked bitch");
  };

  return (
    <div>
      (show ? <div>This is a rendering area.</div> :{" "}
      <div>Here we'll be doing Conditional Rendering</div>)
      <br />
      {show}
      <button onClick={() => handleClick(setShow(true))}>Click here</button>
    </div>
  );
}

export default Condition;
