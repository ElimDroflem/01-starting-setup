import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // creating the function that collects the event
  const yearChangedHandler = (event) => {
    // THIS PASSES DATA TO PARENT FUNCTION
    props.onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// listen to changes in state from the dropdown
// The change in state is then forwarded to the expenses component
// the year selected is stored in a state in Expenses
// ExpenseFilter component is added to expenses.
// nothing needs to be done with the information yet, except to be passed to the expenses.js
