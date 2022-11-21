import {View, Text,Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpensesScreen from '../screens/AllExpensesScreen';
import RecentExpensesScreen from '../screens/RecentExpensesScreen';
import Colors from '../utils/styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/UI/IconButton';
const BottomTab = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
        tabBarActiveTintColor: Colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            iconLabel={'add'}
            size={28}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
          />
        ),
      })}>
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
