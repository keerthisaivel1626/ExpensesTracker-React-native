import {createSlice} from '@reduxjs/toolkit';

const expensesReducer = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpenses: (state, action) => {
      
      state.expenses.push(action.payload.id);
    },
    deleteExpense: (state, action) => {
         state.expenses.splice(state.expenses.indexOf(action.payload.id),1);
    },
    updateExpenses: (state, action) => {

            const updatableExpenseIndex = state.findIndex(
              expense => expense.id === action.payload.id,
            );
             const updatableExpense = state[updatableExpenseIndex];
             const updatedItem = {...updatableExpense, ...action.payload.data};
             const updatedExpenses = [...state];
             updatedExpenses[updatableExpenseIndex] = updatedItem;
      
    },
  },
});
export const {addExpenses, deleteExpense, updateExpenses} = favoritesReducer.actions;
export default expensesReducer.reducer;
