import "./ChartBar.css";

function ChartBar(props) {
  const { chartBarData, maxValue } = props;
  let barHeight = "0%";
  if (maxValue > 0) barHeight = (chartBarData.value / maxValue) * 100 + "%";
  console.log(barHeight);
  return (
    <div className="chartbar-level1">
      <div className="bar-shell">
        <div className="actual-bar" style={{ height: barHeight }}></div>
      </div>
      <div className="label">{chartBarData.label}</div>
    </div>
  );
}

export default ChartBar;
