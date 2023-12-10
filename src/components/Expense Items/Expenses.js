import ExpenseItem from "./ExpenseItem.js";
import FilterByYear from "./FilterByYear.js";
import Chart from "../Chart/Chart.js";
import "./Expenses.css";
import ExpenseCommonCard from "./ExpenseCommonCard.js";

function Expenses(props) {
  const filterByYearHandler = function (selectedYear) {
    props.onFilterByYear(selectedYear);
  };

  let conditionalResponse = (
    <h3 className="no-expense">No Expenses found for this year</h3>
  );
  if (props.data.length > 0)
    conditionalResponse = props.data.map((expense) => (
      <ExpenseItem key={expense.id} expenseData={expense} />
    ));

  //react is capable of listing individual elements of the array as html elements, that's why the array returned by map is able to work accordingly
  return (
    <ExpenseCommonCard className="expense-items-wrapper">
      <FilterByYear onFilterByYear={filterByYearHandler} />
      <Chart expenses={props.data} />
      {conditionalResponse}
    </ExpenseCommonCard>
  );
}

export default Expenses;

/*
Earlier Response, note we can send an array of custom html elements in jsx code, jsx will unlist it and render the individual elements
<ExpenseCommonCard className="expense-items-wrapper">
  <FilterByYear onFilterByYear={filterByYearHandler} />
  {props.data.map((expense) => (
    <ExpenseItem key={expense.id} expenseData={expense} />
  ))}
</ExpenseCommonCard>
*/
