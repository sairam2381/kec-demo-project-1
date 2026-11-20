import react, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const getData = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const results = await getData.json();
        console.log("Results:", results);
        setData(results);
      } catch (e) {
        console.log("Error:", e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  if (loading == true) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Hello {count}</h1>
      {data?.map((item, index) => {
        return (
          <div>
            <div>{item?.id}</div>
            <div>{item?.name}</div>
            <div>{item?.email}</div>
            {/* <div>{item?.address?.street}</div> */}
          </div>
        );
      })}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setName(name + 1)}>Change name</button>
    </div>
  );
};
export default UseEffectComponent;
