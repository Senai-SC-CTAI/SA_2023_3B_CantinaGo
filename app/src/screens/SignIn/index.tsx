import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import styles from './styles';

export function SignIn() {

  const navigation = useNavigation()

  function SignIn(){
    navigation.navigate('Route')
  }
  function SignUp(){
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
    <Image source={require("../../../assets/img/logo-cor.svg")} style={{width:100, height:100, resizeMode:"contain"}}></Image>
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
   <TouchableOpacity style={styles.button} onPress={(SignIn)}>
     <Text style={styles.buttonText}>Entrar</Text>
   </TouchableOpacity>
   <Text style={styles.texty}>Não tem login?</Text>
   <TouchableOpacity style={styles.cadastro} onPress={(SignUp)}>
   <Text style={styles.cadastro}>Faça cadastro</Text>
   </TouchableOpacity>
 </View>
  );
};