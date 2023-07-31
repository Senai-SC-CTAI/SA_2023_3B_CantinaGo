import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>CantinaGo</Text>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('./img/coxinha.png')}/>
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
  }
});
