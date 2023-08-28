import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Cards } from './Cards';

import Content from "../data/Content"

import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium
    }  from '@expo-google-fonts/inter';
  

export function Categoria(props: { category: string }) {
  const filteredContent = Content.filter(item => item.category === props.category);

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

})
  
  return (
      <View style={styles.container}>
          <Image source={require("../../assets/img/pao.png")} style={styles.ImageComida}></Image>
          <View style={styles.Information}>
              <Text style={styles.nome}>Nome Comida</Text>
              <Text style={styles.caloria}>Caloria Comida</Text>
              <Text style={styles.preco}>Preço Comida</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    display:'flex',
    flexDirection:'row',
    width:"90%",
    height:80,
    alignContent:'center',
    alignItems:'center',
    borderRadius:5,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
      marginTop:10,
  },
  tituloComidas: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
  },
  scrollComidas: {
    flexDirection: 'row',
  },
  Information:{
    display:'flex',
    flexDirection:'column'
  },
  ImageComida:{
    width:60,
    height:60,
    resizeMode:"contain",
    marginRight:20,
    marginLeft:20
  },
  nome:{
    fontSize:14,
    fontFamily:"Inter_600SemiBold",
  },
  caloria:{
    fontSize:12,
    fontFamily:"Inter_600SemiBold",
    color:"#7A7A7A"
  },
  preco:{
    fontSize:12,
    fontFamily:"Inter_400Regular",
    color:"#FA321A"
  }
});