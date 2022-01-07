import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (operation) => {
    if (operation === "add") {
      return setCounter(counter + 1);
    }
    return setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>
        Counter : {counter} <br />
        <button onClick={() => handleCounter("add")}>+ Add</button>
        <button onClick={() => handleCounter("substract")}>- Substract</button>
      </p>
    </>
  );
};

export default Counter;
