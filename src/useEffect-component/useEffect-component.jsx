import react, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getData = await fetch("https://jsonplaceholder.typicode.com");
        const results = await getData.json();
        console.log("Results:", results);
        setData(results);
      } catch (e) {
        console.log("=>(Error:)<=", e);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setName(name + 1)}>Change name</button>
    </div>
  );
};
export default UseEffectComponent;
