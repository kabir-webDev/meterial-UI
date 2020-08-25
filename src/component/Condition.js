import React from "react";
import { useState } from "react";

function Condition() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        Lets Check this out------{" "}
        <button onClick={() => setShow(false)}>Click Bro</button>
      </div>
      {show ? (
        <div>In the langs In the true</div>
      ) : (
        <div>In the langs In the false</div>
      )}
    </>
  );
}

export default Condition;
