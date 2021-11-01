import "./App.css";
import { MyProvider } from "./context";
import Function from "./function";
import Button from "./updateValue";
import Butt2 from "./updateNumber";

const App = () => {
  return (
    <>
      <MyProvider
        initialValue={"Starting Value"}
        myFn={(val) => console.log(val)}
        initialNumber={287}
      >
        <div style={{ backgroundColor: "none" }}>
          <Function />
          <Button />
          <Butt2 />
        </div>
      </MyProvider>
    </>
  );
};

export default App;
