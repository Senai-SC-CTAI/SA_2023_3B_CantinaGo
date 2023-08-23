import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export function Search() {

  const navigation = useNavigation();

  function back() {
    navigation.navigate("Home");
  }
  function food() {
    navigation.navigate("Food");
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
          <FontAwesome
            name="search"
            size={24}
            color="#FA321A"
            style={{ marginLeft: 20, marginRight: 20 }} />
          <TextInput placeholder="" style={{ width: '70%' }}></TextInput>
        </View>
      </View>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
        <View style={styles.searchItens}>

          <TouchableOpacity onPress={food}>
            <View style={styles.searchIten}>
              <ImageBackground source={require("../../../assets/img/salgados.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
                <Text style={styles.ItenSearchItens}>Salgados</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={food}>
          <View style={styles.searchIten}>
            <ImageBackground source={require("../../../assets/img/doces.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
              <Text style={styles.ItenSearchItens}>Doces</Text>
            </ImageBackground>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchItens}>

          <TouchableOpacity onPress={food}>
          <View style={styles.searchIten}>
            <ImageBackground source={require("../../../assets/img/sucos.svg")} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20 }}>
              <Text style={styles.ItenSearchItens}>Sucos</Text>
            </ImageBackground>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={food}>
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
