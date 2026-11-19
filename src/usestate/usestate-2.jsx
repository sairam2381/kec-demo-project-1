import react, { useState } from "react";

const UseStateTwo = () => {
  const [formData, setFormData] = useState(null);
  const submitFunction = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={submitFunction}>
        <label>First name</label>
        <input type="text" onChange={(e) => setFormData(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseStateTwo;
