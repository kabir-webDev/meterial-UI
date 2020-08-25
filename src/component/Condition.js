import React from "react";
import { useState } from "react";
import Walah from "./Walah";
import If from "./If";

function Condition() {
  const [show, setShow] = useState(false);
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
      <If condition={show}>
        <Walah />
      </If>
    </>
  );
}

export default Condition;
