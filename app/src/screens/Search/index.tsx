import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated';


export function Search() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={38}
          color="#FA321A"
          style={{ marginLeft: 20 }}
        />
        <Text style={styles.title}>Buscar</Text>
      </View>
    <View style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <View style={styles.inputSearchHolder}>
        <FontAwesome 
          name="search" 
          size={24} 
          color="#FA321A"
          style={{marginLeft:20, marginRight:20}} />
        <TextInput placeholder=""></TextInput>
      </View>
      </View>
    <View style={{display:'flex', alignItems:'center', marginTop:50}}>
      <View style={styles.searchItens}>
        <View style={styles.searchIten}>
          <Text style={styles.ItenSearchItens}>Salgados</Text>
        </View>
        <View style={styles.searchIten}>
          <Text style={styles.ItenSearchItens}>Doces</Text>
        </View>
        </View>
        <View style={styles.searchItens}>
        <View style={styles.searchIten}>
          <Text style={styles.ItenSearchItens}>Sucos</Text>
        </View>
        <View style={styles.searchIten}>
          <Text style={styles.ItenSearchItens}>Snacks</Text>
        </View>
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    top: 0,
    alignItems: 'center'
  },
  inputSearchHolder: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    borderRadius: 200,
    height: 40,
    width: "90%",
    marginTop:10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  title:{
    fontSize:36,
    color:"#000000",
    marginLeft:20,
    fontWeight:"bold"

  },
  searchItens:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  searchIten:{
    width:180,
    height:240,
    borderRadius:20,
    backgroundColor:"#FF1B00",
    marginTop:10,
    display:'flex',
    textAlign:'center',
    alignItems:"center",
    justifyContent:"center",
    marginLeft:5,
    marginRight:5,
 
  },
  ItenSearchItens:{
    color:"#FFFFFF",
    fontSize:24,
    fontWeight:"bold"
  }
})