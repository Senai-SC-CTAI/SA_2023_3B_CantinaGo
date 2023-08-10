import { background } from 'native-base/lib/typescript/theme/styled-system';
import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text } from 'react-native';

export function User() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContent}>
      <View style={styles.profilePicture}></View>
      <View style={styles.profileInfo}>
      </View>
      </View>
      <View style={styles.inputsInfo}>
        <TextInput style={styles.inputs} placeholder="email" placeholderTextColor={"#6A6A6A"}></TextInput>
        <TextInput style={styles.inputs} placeholder="data de nascimento" placeholderTextColor={"#6A6A6A"}></TextInput>
        <TextInput style={styles.inputs} placeholder="turma" placeholderTextColor={"#6A6A6A"}></TextInput>
        <TextInput style={styles.inputs} placeholder="telefone" placeholderTextColor={"#6A6A6A"}></TextInput>
      </View>
      <View style={styles.feedback}>
        <Text style ={{color: "9E9D9D"}}>Algum comentário</Text>
        <Text>Deixe-o aqui</Text>
      </View>

    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    display:'flex',
    alignItems: 'center',
     
  },

  profileContent:{
  justifyContent:'center',
  display:'flex',
  textAlign: 'center',

  },
  inputsInfo:{

  },
  inputs:{
    width: 290,
    height: 37,
    backgroundColor: "#F4F4F4",
    marginBottom: 20,
    borderRadius: 10,
  }
})