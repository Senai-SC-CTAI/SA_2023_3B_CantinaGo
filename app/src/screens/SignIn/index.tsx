import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

import styles from "./styles";

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
} from '@expo-google-fonts/inter';


const logar = async (email: string, senha: string) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      email: email,
      senha: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export function SignIn() {
  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

  })

  const navigation = useNavigation();

  function SignIn() {
    navigation.navigate("Route");
  }
  function SignUp() {
    navigation.navigate("SignUp");
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [, setIsAuthenticated] = useState(false)

  const handleLogin = async () => {
    try {
      const response = await logar(email, senha);
      if (response == true) {
        setIsAuthenticated(true);
        window.location.href = "/home"
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          placeholderTextColor={"#6A6A6A"}
          secureTextEntry
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={SignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.texty}>Não tem login?</Text>
      <TouchableOpacity onPress={SignUp}>
        <Text style={styles.cadastro}>Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}