import React from "react";
import { useMyContext } from "./context";

const Butt2 = () => {
  const data = 8721392187392817;
  const { setNumber } = useMyContext();

  const buttonClick = () => {
    setNumber(data);
  };

  return (
    <>
      <button onClick={() => buttonClick()}>Update Number</button>
    </>
  );
};

export default Butt2;
