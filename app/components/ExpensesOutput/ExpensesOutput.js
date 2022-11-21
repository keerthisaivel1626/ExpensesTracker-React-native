import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import Colors from '../../utils/styles/Colors';



const ExpensesOutput = ({expensesPeriod}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
   paddingHorizontal:24,
   paddingTop:24,
   paddingBottom:0,
    backgroundColor:Colors.primary700
  }
})
export default ExpensesOutput;
