import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


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

      <View style={styles.inputSearchHolder}>
        <FontAwesome 
          name="search" 
          size={24} 
          color="black" />
        <TextInput placeholder="Digite o que deseja buscar"></TextInput>
      </View>

      <View style={styles.searchItens}>
        <View style={styles.salgados}>
          <Text style={styles.ItenSearchItens}>Salgados</Text>
        </View>
        <View style={styles.doces}>
          <Text style={styles.ItenSearchItens}>Doces</Text>
        </View>
        <View style={styles.sucos}>
          <Text style={styles.ItenSearchItens}>Sucos</Text>
        </View>
        <View style={styles.snacks}>
          <Text style={styles.ItenSearchItens}>Snacks</Text>
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
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  },
  inputSearchHolder: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#F4F4F4',
    borderRadius:200,
  }
})