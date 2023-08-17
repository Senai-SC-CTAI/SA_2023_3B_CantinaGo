import * as React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import styles from './styles';

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

   <View style>
      <icon><TextInput></TextInput>
   </View>
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

