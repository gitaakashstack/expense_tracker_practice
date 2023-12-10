import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const { expenses } = props;
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  expenses.forEach((expense) => {
    const curMonth = expense.date.getMonth();
    chartDataPoints[curMonth].value += expense.price;
  });

  const maxValue = Math.max(
    ...chartDataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chartbars-container">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          chartBarData={dataPoint}
          maxValue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
