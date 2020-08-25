import React from "react";

const If = (props, children) => {
  if (props.show) return children;
  return null;
};

export default If;
