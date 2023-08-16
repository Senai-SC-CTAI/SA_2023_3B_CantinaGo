import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
       <Image source={require("../../../assets/img/logo.png")} style={{width:100, height:100, resizeMode:"contain"}}></Image>
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.texty}>Não tem login?</Text>
      <Text style={styles.cadastro}>Faça cadastro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#FA321A',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  
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
    paddingHorizontal: 10, 
    marginBottom: 10,
    backgroundColor:"#F4F4F4",
    margin:20,
  },
  button: {
    margin:25,
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width:150,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
