import react from "react";
import "./flex-style.css";
const FlexComponent = () => {
  return (
    <div className="parent">
      <h1>Flex Concept</h1>
      <div className="child" style={{ backgroundColor: "red" }}></div>
      <div className="child"></div>
      <div className="child" style={{ backgroundColor: "green" }}></div>
    </div>
  );
};
export default FlexComponent;
