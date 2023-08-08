import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bom dia!</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 40,
    marginLeft: 37,
    fontSize: 39,
    fontWeight: 'bold',
  },
  line: {
    width: 153,
    height: 3.5,
    backgroundColor: '#FA321A',
    marginTop: 9,
    marginLeft: 37,
  },
});
