import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';
import axios from 'axios'





import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
  }  from '@expo-google-fonts/inter';


import styles from './styles'



export function Search() {


  const [comidas, setComidas] = useState([]);
  const [novaComida, setNovaComida] = useState({
    id:"",
    foto:"",
    nome:"",
    preco:"",
    caloria:"",
    category:"",
    ingredientes:[""],
  });
  

  useEffect(() => {
    fetchComidas();
  }, []);

  const fetchComidas = async () => {
    try {
      
    } catch (error) {
      console.error('Erro ao buscar comidas:', error);
    }
  };
  
  



  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium
})
  
  const navigation = useNavigation();

  function back() {
    navigation.navigate("Home");
  }
  function category(category: string) {
    navigation.navigate("Category", { category });
  }

function pesquisa(){
  useState
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Feather
            name="arrow-left"
            size={38}
            color="#FA321A"
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Buscar</Text>
      </View>
    

      {/* input search */}
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <View style={styles.inputSearchHolder}>
          <Image
              source={require("../../../assets/Icons/BuscarVisi.svg")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                marginLeft: 13,
              }}
            />
          <TextInput placeholder="" style={{ width: '70%' }}></TextInput>
        </View>
      </View>
      <FlatList
      data={comidas}
      renderItem={({})}>


      </FlatList>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
        <View style={styles.searchItens}>

        <TouchableOpacity onPress={() => category("Salgados")}>
            <View style={styles.searchIten}>
              <ImageBackground source={require("../../../assets/img/salgados.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
                <Text style={styles.ItenSearchItens}>Salgados</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => category("Doces")}>
          <View style={styles.searchIten}>
            <ImageBackground source={require("../../../assets/img/doces.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
              <Text style={styles.ItenSearchItens}>Doces</Text>
            </ImageBackground>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchItens}>

        <TouchableOpacity onPress={() => category("Bebidas")}>
          <View style={styles.searchIten}>
            <ImageBackground source={require("../../../assets/img/sucos.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
              <Text style={styles.ItenSearchItens}>Sucos</Text>
            </ImageBackground>
          </View>
          </TouchableOpacity>

           <TouchableOpacity onPress={() => category("Snacks")}>
          <View style={styles.searchIten}>
            <ImageBackground source={require("../../../assets/img/snacks.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
              <Text style={styles.ItenSearchItens}>Snacks</Text>
            </ImageBackground>
          </View>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}