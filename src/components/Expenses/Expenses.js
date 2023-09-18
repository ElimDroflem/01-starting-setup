import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearChange = (year) => {
    setSelectedYear(year);
    console.log("Year selected in Expenses:", year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearChange={handleYearChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
