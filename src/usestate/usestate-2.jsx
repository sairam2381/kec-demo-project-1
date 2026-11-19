import react, { useState } from "react";

const UseStateTwo = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const submitFunction = (e) => {
    e.preventDefault();
    console.log("Data:", formData);
  };
  return (
    <div>
      <form onSubmit={submitFunction}>
        <label>First name</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseStateTwo;
