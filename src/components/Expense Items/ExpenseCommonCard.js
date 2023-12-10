import "./ExpenseCommonCard.css";

function ExpenseCommonCard(props) {
  const classes = "commoncss " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default ExpenseCommonCard;
