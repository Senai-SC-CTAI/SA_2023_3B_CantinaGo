import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function SignUp() {
  const navigation = useNavigation();

  function SignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/logo-cor.svg")}
        style={styles.image}
      />

      <Text style={styles.title}> Cadastro </Text>

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
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  criar senha"
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
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  confirmar senha"
            placeholderTextColor={"#6A6A6A"}
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
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={SignIn}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.texty}>Já possui conta?</Text>
      <TouchableOpacity onPress={SignIn}>
        <Text style={styles.link}>Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}
