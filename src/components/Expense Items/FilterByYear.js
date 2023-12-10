import "./FilterByYear.css";

const FilterByYear = function (props) {
  const yearFilterHandler = (event) => {
    props.onFilterByYear(event.target.value);
  };

  return (
    <div className="filterby-year">
      <label for="years">Filter By Year</label>
      <select id="years" onChange={yearFilterHandler}>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default FilterByYear;
