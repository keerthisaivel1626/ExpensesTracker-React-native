import React, {useContext} from 'react';
import {ExpensesContext} from '../store/context/ExpensesContext';
import {getDateMinusDays} from '../utils/method/date';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
const RecentExpensesScreen = () => {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpense = expenseCtx.expenses.filter(expenses => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);
    return expenses.date >= dateSevenDaysAgo && expenses.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpense}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpensesScreen;
