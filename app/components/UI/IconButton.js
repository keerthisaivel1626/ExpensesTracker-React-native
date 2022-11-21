import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const IconButton = ({iconLabel, size, color, onPress}) => {

  return (
    <Pressable onPress={onPress} style={pressed => pressed && styles.press}>
      <View style={styles.buttonContainer}>
        <Ionicons name={iconLabel} size={size} color={color} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  press: {
    opacity: 0.75,
  },
});
export default IconButton;
