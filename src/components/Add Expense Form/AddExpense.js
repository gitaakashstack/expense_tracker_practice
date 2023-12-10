import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./ExpenseForm.css";
import "./AddExpense.css";

function AddExpense(props) {
  const [displayForm, setStateOfFormDisplay] = useState(false);

  const formDisplayHandler = function (event) {
    setStateOfFormDisplay(true);
  };

  const formHideHandler = function (event) {
    setStateOfFormDisplay(false);
  };
  const formSubmissionHandler = (inputFormData) => {
    props.onAddExpense(inputFormData);
    setStateOfFormDisplay(false);
  };

  return (
    <div className="form-wrapper">
      {displayForm ? (
        <ExpenseForm
          onFormSubmission={formSubmissionHandler}
          onCancelForm={formHideHandler}
        />
      ) : (
        <div className="button center-align-button">
          <button type="button" onClick={formDisplayHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
}

export default AddExpense;

/*the two classes on 'add new expense' button define different text-align value, but since class 'center-align-button' is defined lower
aur below the 'button' class, so in this case 'center-align-button' prevails, because If the same rule is written twice into the external 
style sheet, then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied*/
