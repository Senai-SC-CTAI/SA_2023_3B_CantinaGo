import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {TabRoutes} from './src/routes/app.route'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>CantinaGo</Text>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('./assets/img/coxinha.png')}/>
      <TabRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa321a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
  }
});
