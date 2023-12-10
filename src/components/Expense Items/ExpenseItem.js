import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCommonCard from "./ExpenseCommonCard.js";

function ExpenseItem(props) {
  return (
    <ExpenseCommonCard className="expense-item">
      <div className="expense-item-name_date">
        <ExpenseDate date={props.expenseData.date} />
        <h2 className="expense-name">{props.expenseData.name}</h2>
      </div>
      <div className="expense-rate">&#8377;{props.expenseData.price}</div>
    </ExpenseCommonCard>
  );
}
// <div>{props.expenseData.date.toLocaleDateString("en-GB")}</div>
export default ExpenseItem;
