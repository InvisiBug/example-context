import React from "react";
import { useMyContext } from "./context";

const Function = () => {
  const { value, number, myFn } = useMyContext();

  console.log("Value:", value);

  myFn("test");

  return (
    <>
      <h1>Hello from function</h1>

      <p>{value}</p>
      <p>{number}</p>
    </>
  );
};

export default Function;
