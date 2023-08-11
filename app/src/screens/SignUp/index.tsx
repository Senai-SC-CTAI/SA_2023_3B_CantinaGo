import * as React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  
  const navigation = useNavigation()

  function SignIn(){
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
    <Image
     source={require('../../../assets/img/logo-cor.svg')} // Substitua pelo caminho correto da sua imagem
     style={styles.image}
   />

    <Text style={styles.title}> Cadastro </Text>
    
   <TextInput
     style={styles.input}
     placeholder="seuemail@gmail.com"     
     />

   
   <TextInput
     style={styles.input}
     placeholder="criar senha"
     secureTextEntry
   />
   <TextInput
     style={styles.input}
     placeholder="confirmar senha"
     secureTextEntry
   />
   <TextInput
     style={styles.input}
     placeholder="telefone"
   />
   <TextInput
     style={styles.input}
     placeholder="turma"
   />
 <TouchableOpacity style={styles.button} onPress={(SignIn)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      
   <TouchableOpacity onPress={(SignIn)}>
     <Text style={styles.link}>Já possui uma conta? Faça login </Text>

   </TouchableOpacity>
 </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FA321A',
    fontWeight:  'bold'
  },
  input: {
    width: '50%',
    borderRadius: 10,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
  },
  link: {
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  image: {
    width: 200, // Defina a largura desejada da imagem
    padding: 40,
    height: 200, // Defina a altura desejada da imagem
    resizeMode: 'contain', // Modo de redimensionamento da imagem
    marginBottom: 80, // Espaçamento superior
  },
  button: {
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 10,
  },
})