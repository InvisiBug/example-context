import React from "react";
import { useMyContext } from "./context";

const Button = () => {
  const data = "New Value";
  const { setValue } = useMyContext();

  const buttonClick = () => {
    setValue(data);
  };

  return (
    <>
      <button onClick={() => buttonClick()}>Update Value</button>
    </>
  );
};

export default Button;
