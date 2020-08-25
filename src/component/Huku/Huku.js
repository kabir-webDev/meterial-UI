import React, { useReducer } from "react";

const initialState = "";
const reducer = (state, action) => {
  switch (action) {
    case "INCREASE":
      return state + 1;
      break;
    case "DECREASE":
      return state - 1;
      break;
    default:
      return state;
  }
};

function Huku() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state}</h3>
      <button onClick={() => dispatch("INCREASE")}>Increase</button>
      <button onClick={() => dispatch("DECREASE")}>Increase</button>{" "}
    </div>
  );
}

export default Huku;
