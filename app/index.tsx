import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState<string>(''); // Primer número
  const [num2, setNum2] = useState<string>(''); // Segundo número
  const [operation, setOperation] = useState<string>(''); // Operación seleccionada
  const [result, setResult] = useState<number | null>(null); // Estado del resultado (inicialmente null)

  const handleOperation = (op: string) => {
    setOperation(op);
    setResult(null); // Reiniciar el resultado cuando se cambia la operación
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
      // Limpiar campos después de la operación
      setNum1('');
      setNum2('');
      setOperation('');
    } else {
      Alert.alert('Error', 'Por favor ingresa números válidos');
    }
  };

  return (
    <View style={styles.container}>
      {result !== null && <Text style={styles.resultText}>Resultado: {result}</Text>} {/* Mostrar resultado solo si es válido */}
      
      {operation && (
        <>
          {/* Campos de entrada para los números */}
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
          <Button title="Realizar operación" onPress={handleSubmit} />
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Sumar" onPress={() => handleOperation('sum')} />
        <Button title="Restar" onPress={() => handleOperation('subtract')} />
        <Button title="Multiplicar" onPress={() => handleOperation('multiply')} />
        <Button title="Dividir" onPress={() => handleOperation('divide')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 18,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
  },
});

export default App;

