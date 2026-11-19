import react from "react";
import Dropdown from "react-dropdown";
const options = [
  { value: "apple", label: "Apple" },
  { value: "mango", label: "Mango" },
];
const NpmDropdownComponent = () => {
  const handleChange = (option) => {
    console.log(option.value);
  };

  return (
    <Dropdown
      aria-label="Number"
      options={options}
      onChange={handleChange}
      placeholder="Select an option"
    />
  );
};
export default NpmDropdownComponent;
