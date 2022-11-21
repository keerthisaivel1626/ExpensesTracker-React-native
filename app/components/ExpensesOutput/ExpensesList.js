import {View, FlatList, Text} from 'react-native';
import React from 'react';
import ExpensesItem from './ExpensesItem';

const renderExpensesItem = itemData => {
  return <ExpensesItem {...itemData.item} />;
};


const ExpensesList = ({expenses}) => {
 
  return (
    <View>
      <FlatList data={expenses} renderItem={renderExpensesItem} />
    </View>
  );
};

export default ExpensesList;
