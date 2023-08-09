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
        <TextInput style={styles.inputs} placeholder="Email"></TextInput>
        <TextInput style={styles.inputs} placeholder="Data de nascimento"></TextInput>
        <TextInput style={styles.inputs} placeholder="Turma"></TextInput>
        <TextInput style={styles.inputs} placeholder="Telefone"></TextInput>
      </View>
      <View style={styles.feedback}>
        <Text>Algum comentário</Text>
        <Text>Deixe-o aqui</Text>
      </View>

    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileContent:{

  },
  inputsInfo:{}
  
})