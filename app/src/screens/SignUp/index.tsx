import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
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

      <View style={styles.inputsInfo}>
        <View style={styles.viewInput}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10 }}
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
            style={{ marginLeft: 10 }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  criar senha"
            placeholderTextColor={"#6A6A6A"}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  confirmar senha"
            placeholderTextColor={"#6A6A6A"}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
          <Feather
            name="smartphone"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  telefone"
            placeholderTextColor={"#6A6A6A"}
          ></TextInput>
        </View>
        <View style={styles.viewInput}>
          <MaterialCommunityIcons
            name="school-outline"
            size={24}
            color="#6A6A6A"
            style={{ marginLeft: 10 }}
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
      
      <Text style={styles.texty}>Não tem login?</Text>
      <TouchableOpacity onPress={SignIn}>
        <Text style={styles.link}>Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}
