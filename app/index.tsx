import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleOperation = (op: string) => {
    setOperation(op);
    setResult(null);
  };

  const handleSubmit = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      switch (operation) {
        case 'sum':
          setResult(n1 + n2);
          break;
        case 'subtract':
          setResult(n1 - n2);
          break;
        case 'multiply':
          setResult(n1 * n2);
          break;
        case 'divide':
          if (n2 !== 0) {
            setResult(n1 / n2);
          } else {
            setResult(null);
            Alert.alert('Error', 'No se puede dividir por cero');
          }
          break;
        default:
          Alert.alert('Error', 'Operación no válida');
      }
    } else {
      Alert.alert('Error', 'Por favor ingresa números válidos');
    }
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setOperation('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      {result !== null && <Text style={styles.resultText}>Resultado: {result}</Text>}
      {operation ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el primer número"
            keyboardType="numeric"
            value={num1}
            onChangeText={setNum1}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresa el segundo número"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <TouchableOpacity style={styles.operationButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Realizar operación</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('sum')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('subtract')}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('multiply')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('divide')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
      )}

      {result !== null && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Regresar al inicio</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  resultText: {
    fontSize: 32,
    marginBottom: 20,
    color: '#00FF00',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: 8,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  operationButton: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  resetButton: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;