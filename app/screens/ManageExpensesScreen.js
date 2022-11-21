import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {ExpensesContext} from '../store/context/ExpensesContext';
import IconButton from '../components/UI/IconButton';
import Colors from '../utils/styles/Colors';
import CustomButton from '../components/UI/CustomButton';
const ManageExpensesScreen = ({route, navigation}) => {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpensesId = route.params?.expenseId;
  const isEditing = !!editedExpensesId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expenses' : 'Add Expenses',
    });
  }, [navigation, isEditing]);

  const deleteExpensesHandler = () => {
    closingModal();
  };
  const cancelHandler = () => {
    closingModal();
  };
  const confirmHandler = () => {
    closingModal();
  };
  const closingModal = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconLabel="trash"
            color={Colors.error500}
            size={24}
            onPress={deleteExpensesHandler}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
export default ManageExpensesScreen;
