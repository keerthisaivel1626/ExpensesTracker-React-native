import {View,  StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {setCustomText} from 'react-native-global-props';
import RootStack from './navigation/RootStack';
import { ExpensesContext } from './store/context/ExpensesContext';
const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Rubik-Regular',
    },
  };
  setCustomText(customTextProps);
  return (
    <>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />
      </View>
      <ExpensesContext>
        <RootStack />
      </ExpensesContext>
    </>
  );
};
const styles = StyleSheet.create({
  StatusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: 'rgba(22,7,92,1)',
  },
});
export default App;
