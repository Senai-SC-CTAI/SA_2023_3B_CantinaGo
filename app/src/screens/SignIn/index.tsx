import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          marginTop: 40,
        }}
      ></Image>
      <Text style={styles.title}>Login</Text>

        <View style={styles.viewInput}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10}}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  seuemail@estudante.sesisenai.org.br"
            placeholderTextColor={"#6A6A6A"}
          ></TextInput>
        </View>

        <View style={styles.viewInput}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10}}
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
      <TouchableOpacity style={styles.cadastro} onPress={SignUp}>
        <Text style={styles.cadastro}>Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
