import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react'
import axios from "axios";

import styles from "./styles";

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
  }  from '@expo-google-fonts/inter';

export function SignIn() {

  useFonts({
   Inter_400Regular,
   Inter_700Bold,
   Inter_600SemiBold,
   Inter_500Medium
})

  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [loginError, setLoginError] = useState( ); // Para armazenar mensagens de erro de login

   function SignUp() {
    navigation.navigate("SignUp");
  }

  const fetchLogin = async () =>{
    try{
      const response = await axios.get('http://localhost:8090/login');
      setLogin(response.data);
    }catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchLogin();
  }, []);
  
  const handleSubmit = async () => {
    try {
      let entrarUsuario = {
        email: emailInput,
        senha: senhaInput,
      }
      
      const response = await axios.post('http://localhost:8090/login', entrarUsuario); // Altere a rota para a rota de login adequada
      if (response.data.success) {
        // Se a API retornar sucesso, permita o acesso à tela inicial
        navigation.navigate("Route");
      } else {
        // Se a API retornar um erro, defina a mensagem de erro para exibição
        setLoginError(response.data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/logo-cor.png")}
        style={{
          width: 134,
          height: 134,
          resizeMode: "contain",
          marginTop: -100,
          marginBottom: 50,

        }}
      ></Image>
      <Text style={styles.title}>Login</Text>

        <View style={styles.viewInput}>
          <Image
            source={require("../../../assets/Icons/Email.png")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginLeft: 13,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  seuemail@estudante.sesisenai.org.br"
            placeholderTextColor={"#6A6A6A"}
            value={emailInput}
            onChangeText={(text)=> setEmailInput(text)}
          ></TextInput>
        </View>

        <View style={styles.viewInput}>
          <Image
            source={require("../../../assets/Icons/Senha.png")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 13,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  senha"
            value={senhaInput}
            onChangeText={(text)=> setSenhaInput(text)}
            secureTextEntry={true}
            placeholderTextColor={"#6A6A6A"}
          ></TextInput>
        </View>
           {loginError && (
            <Text style={styles.errorText}>{loginError}</Text>
           )}
     
     <TouchableOpacity style={styles.button} onPress={handleSubmit} >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.texty}>Não tem login?</Text>
      <TouchableOpacity  onPress={SignUp}>
        <Text style={styles.cadastro}>Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
