import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../utils/styles/Colors';
import {getFormattedDate} from '../../utils/method/date';
import {useNavigation} from '@react-navigation/native';
const ExpensesItem = ({id,description, amount, date}) => {
  const navigation = useNavigation();
  const expensesPressHandler = () => {
    navigation.navigate('ManageExpenses',{expenseId:id});
  };
  return (
    <Pressable onPress={expensesPressHandler}>
      <View style={styles.expensesItem}>
        <View>
          <Text style={[styles.textBase, styles.descriptionText]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  expensesItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.primary50,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: Colors.primary500,
  },
});
export default ExpensesItem;
