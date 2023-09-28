import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function SignUp() {
  const navigation = useNavigation();
  
  const [cadastro, setCadastro] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [confirmarSenhaInput, setConfirmarSenhaInput] = useState('');
  const [telefoneInput, setTelefoneInput] = useState('');
  const [turmaInput, setTurmaInput] = useState('');

  function SignIn() {
    navigation.navigate("SignIn");
  }

  const fetchCadastro = async () => {
    try {
      const response = await axios.get('http://localhost:8090/usuario');
      setCadastro(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchCadastro();
  }, []);

  const handleSubmit = async () => {
    try {
      let novoUsuario = {
        email: emailInput,
        senha: senhaInput,
        confirmarSenha: confirmarSenhaInput,
        telefone: telefoneInput,
        turma: turmaInput,
      }
      await axios.post('http://localhost:8090/usuario', novoUsuario);
      fetchCadastro();
      setEmailInput('');
      setSenhaInput('');
      setConfirmarSenhaInput('');
      setTelefoneInput('');
      setTurmaInput('');
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/logo-cor.svg")}
        style={styles.image}
      />

      <Text style={styles.title}> Cadastro </Text>
      <form onSubmit={handleSubmit}>
      <View>
        <View style={styles.viewInput}>
        <Image
            source={require("../../../assets/Icons/Email.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="seuemail@estudante.sesisenai.org.br"
            placeholderTextColor={"#6A6A6A"}
            value={emailInput}
            onChangeText={(text) => setEmailInput(text)}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
        <Image
            source={require("../../../assets/Icons/Senha.svg")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="criar senha"
            secureTextEntry={true}
            placeholderTextColor={"#6A6A6A"}
            value={senhaInput}
            onChangeText={(text) => setSenhaInput(text)}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
        <Image
            source={require("../../../assets/Icons/Senha.svg")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  confirmar senha"
            secureTextEntry={true}
            placeholderTextColor={"#6A6A6A"}
            value={confirmarSenhaInput}
            onChangeText={(text) => setConfirmarSenhaInput(text)}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
        <Image
            source={require("../../../assets/Icons/Telefone.svg")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  telefone"
            placeholderTextColor={"#6A6A6A"}
            value={telefoneInput}
            onChangeText={(text) => setTelefoneInput(text)}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
        <Image
            source={require("../../../assets/Icons/Turma.svg")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  turma"
            placeholderTextColor={"#6A6A6A"}
            value={turmaInput}
            onChangeText={(text) => setTurmaInput(text)}
          ></TextInput>
        </View>
      </View>
      </form>
      <TouchableOpacity 
      style={styles.button} 
      onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.texty}>Já possui conta?</Text>
      <TouchableOpacity onPress={SignIn}>
        <Text style={styles.link}>Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}
