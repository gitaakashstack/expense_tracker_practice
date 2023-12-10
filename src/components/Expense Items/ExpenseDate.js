import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div className="date-card">
      <div>{props.date.toLocaleDateString("en-GB", { month: "long" })}</div>
      <div>{props.date.toLocaleDateString("en-GB", { year: "numeric" })}</div>
      <div>{props.date.toLocaleDateString("en-GB", { day: "numeric" })}</div>
    </div>
  );
}

export default ExpenseDate;
