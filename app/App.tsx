import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Routes } from './src/routes'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>CantinaGo</Text>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('./assets/img/coxinha.png')}/> */}
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  route:{
    width: "100%",
  },
  logo:{
    width: 200,
    height: 200,
  }
});
