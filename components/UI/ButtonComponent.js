import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, width, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { width: width, backgroundColor: isPressed ? '#555' : '#007AFF' },
      ]}
      onPress={() => {
        setIsPressed(!isPressed);
        onPress();
      }}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;