import react from "react";
import "./flex-concept-style-2.css";
const FlexConcept2 = () => {
  return (
    <div className="main_parent">
      <h1>Trusted By</h1>
      <div className="container">
        <div className="container_element">
          <span className="number">100+</span>
          <br></br> <span className="name">Colleges</span>
        </div>
        <div className="container_element">
          <span className="number">150</span>
          <br></br>
          <span className="name">Professional Trainers</span>
        </div>
        <div className="container_element">
          <span className="number">1000+</span>
          <br></br> <span className="name">Study Materials</span>
        </div>
        <div className="container_element">
          <span className="number">1,00,000</span>
          <br></br> <span className="name">Students</span>
        </div>
      </div>
    </div>
  );
};
export default FlexConcept2;
