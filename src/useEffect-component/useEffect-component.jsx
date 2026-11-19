import react, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  useEffect(() => {
    console.log("Hello world");
  }, [count, name]);
  return (
    <div>
      <h1>Hello useEffect:{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setName(name + 1)}>Change name</button>
    </div>
  );
};
export default UseEffectComponent;
