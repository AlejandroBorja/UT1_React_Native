import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [mensaje, setMensaje] = useState("Hola mundo");

  const cambiarMensaje = () => {
    setMensaje(mensaje === "Hola mundo" ? "Hola clase" : "Hola mundo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{mensaje}</Text>
      <Button title="Cambiar Mensaje" onPress={cambiarMensaje} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;