import { useState } from "react";
import Expenses from "./components/Expense Items/Expenses.js";
import AddExpense from "./components/Add Expense Form/AddExpense.js";
import "./App.css";

const DUMMY_DATA = [
  {
    id: Math.random() * 100,
    name: "Laptop",
    price: 54000,
    date: new Date(2018, 6, 10),
  },
  {
    id: Math.random() * 100,
    name: "Washing Machine",
    price: 12000,
    date: new Date(2019, 5, 8),
  },
  {
    id: Math.random() * 100,
    name: "TV",
    price: 26000,
    date: new Date(2019, 1, 22),
  },
  {
    id: Math.random() * 100,
    name: "Thermal Massager",
    price: 200000,
    date: new Date(2016, 9, 13),
  },
];

function App() {
  const [updatedData, setStateForUpdatedData] = useState(DUMMY_DATA);
  const [updatedYear, setStateForUpdatedYear] = useState("2016");

  const addExpenseHandler = (inputFormData) => {
    /*We may be tempted to simply push inputFormData to updatedData array without using state, but that would not reload this component function
    and hence the new expense added won't be reflected on the screen. Only using state feature can reexecute this component which builds the
    UI on the screen with updated data.*/
    setStateForUpdatedData((prevState) => [inputFormData, ...prevState]);
  };

  const filterByYearHandler = (selectedYear) => {
    setStateForUpdatedYear(selectedYear);
  };

  const filteredData = updatedData.filter(
    (expense) => expense.date.getFullYear().toString() === updatedYear
  );

  return (
    <div className="wrapper-level1">
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses data={filteredData} onFilterByYear={filterByYearHandler} />
    </div>
  );
}

export default App;
