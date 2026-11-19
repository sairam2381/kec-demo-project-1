import react from "react";
import "./flex-concept-style-2.css";
const FlexConcept2 = () => {
  const data = [
    {
      title: "Colleges",
      number: "100+",
    },
    {
      title: "Professional Trainers",
      number: "150",
    },
    {
      title: "Study Materials",
      number: "1000+",
    },
    {
      title: "Students",
      number: "1,00,000",
    },
  ];

  // const data = null;
  return (
    <div className="main_parent">
      <h1>Trusted By</h1>
      <div className="container">
        {data == null ? (
          <h1>No data found</h1>
        ) : (
          data?.map((dataValues, index) => {
            return (
              <div className="container_element">
                <span className="number">{dataValues?.number}</span>
                <br></br> <span className="name">{dataValues?.title}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default FlexConcept2;
