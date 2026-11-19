import react from "react";
import "./leaders-today.css";
const LeadersTodayLearnersTomorrow = (props) => {
  return (
    <div className="ultimate_parent">
      <div className="leaders_today_parent">
        <h1 className="leaders_today_child_one">{props.data.title}</h1>
        <h2 className="leaders_today_child_two">{props.data.subTitle}</h2>
        <h3>{props.value}</h3>
      </div>
    </div>
  );
};
export default LeadersTodayLearnersTomorrow;
