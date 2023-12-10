import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [updatedInput, setStateOfFormInput] = useState({
    newName: "",
    newAmount: "",
    newDate: "",
  });
  console.log(updatedInput);
  const inputChangeHandler = (event) => {
    const { target } = event;

    if (target.id === "name")
      setStateOfFormInput((prevState) => ({
        ...prevState,
        newName: target.value,
      }));

    if (target.id === "amount")
      setStateOfFormInput((prevState) => ({
        ...prevState,
        newAmount: target.value,
      }));

    if (target.id === "date")
      setStateOfFormInput((prevState) => ({
        ...prevState,
        newDate: target.value,
      }));
  };

  const formSubmitHandler = (event) => {
    //to avoid reload of page
    event.preventDefault();

    props.onFormSubmission({
      id: Math.random() * 100,
      name: updatedInput.newName,
      price: parseInt(updatedInput.newAmount),
      date: new Date(updatedInput.newDate),
    });

    //setting the new state with empty values so that 'value' attribute of input tag can display empty fields after submission
    setStateOfFormInput((prevState) => ({
      newName: "",
      newAmount: "",
      newDate: "",
    }));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="input-elements-wrapper" onChange={inputChangeHandler}>
        <div className="input">
          <label for="name">Title</label>
          <input type="text" id="name" value={updatedInput.newName}></input>
        </div>
        <div className="input">
          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            step="0.01"
            min="0"
            value={updatedInput.newAmount}
          ></input>
        </div>
        <div className="input">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            min="2016-01-01"
            max="2021-12-31"
            value={updatedInput.newDate}
          ></input>
        </div>
      </div>

      <div className="button">
        <button type="button" onClick={props.onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
