import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ initialValue, myFn, initialNumber, children }) => {
  const [value, setValue] = useState(initialValue);
  const [number, setNumber] = useState(initialNumber);

  return (
    <>
      <MyContext.Provider value={{ value, setValue, number, setNumber, myFn }}>
        {children}
      </MyContext.Provider>
    </>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};

export default MyContext;
