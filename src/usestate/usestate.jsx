import react, { useState } from "react";
import "./usestate-style.css";
const UsestateComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(100);
  return (
    <div className="usestate__element">
      <h1>Count:{count}</h1>
      <button
        className="usestate_style"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="usestate_style"
        onClick={() => {
          // setCount(-50);
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
export default UsestateComponent;
