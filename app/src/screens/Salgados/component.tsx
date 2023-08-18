import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';



export function ComponenteSalgado() {

  return (
    <View style={styles.container}>
        {/* <Image source={require('')} style={{width:60, height:60, resizeMode:"contain"}}></Image> */}
        <View style={styles.infoContainer}>
            <Text style={styles.nome}>Comida</Text>
            <Text style={styles.caloria}>calorico</Text>
            <Text style={styles.preco}>carinho</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width:220,
    height:55,
    borderRadius:5
  },
  infoContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  nome:{
    fontSize:14,
    fontWeight:'bold',
    color:'black'
  },
  caloria:{
    color:"#7A7A7A",
    fontSize:12,
    fontWeight:'bold'
  },
  preco:{
    fontWeight:'normal',
    color:'#FA321A',
    fontSize:12
  }
})