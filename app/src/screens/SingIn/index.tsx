import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export function SignIn() {

  const navigation = useNavigation()

  function Entrar(){
    navigation.navigate('Route')
  }
  function Cadastrar(){
    navigation.navigate('Cadastrar')
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="seuemail@estudante.sesisenai.org.br"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={(Entrar)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.texty}>Não tem login?</Text>
      
      <TouchableOpacity style={styles.cadastro} onPress={(Cadastrar)}>
      <Text style={styles.cadastro}>Faça cadastro</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#FA321A',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily:'inter',
  },
  texty: {
    fontSize: 15,
    marginBottom: 10,
  },
  cadastro: {
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    width: '80%',
    height: 40,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, // Adicionado padding horizontal
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

