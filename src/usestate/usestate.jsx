import react, { useState } from "react";
import "./usestate-style.css";
const UsestateComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  const decrementFunction = () => {
    if (count <= -10) {
      return;
    }
    setCount(count - 1);
  };
  const incrementFunction = () => {
    if (count >= 10) {
      return;
    }
    setCount(count + 1);
  };
  return (
    <div className="usestate__element">
      <h1>Count:{count}</h1>
      <button
        className="usestate_style"
        // onClick={() => {
        //   setCount(count + 1);
        // }}
        onClick={() => {
          incrementFunction();
        }}
      >
        +
      </button>
      <button
        className="usestate_style"
        // onClick={() => {
        //   // setCount(-50);
        //   setCount(count - 1);
        // }}
        onClick={() => {
          decrementFunction();
        }}
      >
        -
      </button>
    </div>
  );
};
export default UsestateComponent;
