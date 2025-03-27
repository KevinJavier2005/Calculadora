import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MultiplicarScreen = () => {
  const [num1, setNum1] = useState<number>(10);
  const [num2, setNum2] = useState<number>(5);
  const result = num1 * num2;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Multiplicación:</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default MultiplicarScreen;