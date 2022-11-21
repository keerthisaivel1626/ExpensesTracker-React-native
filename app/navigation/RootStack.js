import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ManageExpensesScreen from '../screens/ManageExpensesScreen';
import BottomTabStack from './BottomTabStack';
import Colors from '../utils/styles/Colors';
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="ExpensesStack"
          component={BottomTabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpensesScreen}
          options={{
            presentation:'modal',
           // title:'Manage Expenses'
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
