import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function SignIn() {
    navigation.navigate("Route");
  }
  function SignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/logo-cor.svg")}
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
            source={require("../../../assets/Icons/Email.svg")}
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
          ></TextInput>
        </View>

        <View style={styles.viewInput}>
          <Image
            source={require("../../../assets/Icons/Senha.svg")}
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
          ></TextInput>
        </View>
     
     <TouchableOpacity style={styles.button} onPress={SignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.texty}>Não tem login?</Text>
      <TouchableOpacity  onPress={SignUp}>
        <Text style={styles.cadastro}>Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
