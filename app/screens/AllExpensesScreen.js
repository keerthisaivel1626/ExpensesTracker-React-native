import {View, Text} from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/context/ExpensesContext';

const AllExpensesScreen = () => {
  const expensesCtx=useContext(ExpensesContext)
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Last 7 Days" />;
};

export default AllExpensesScreen;
