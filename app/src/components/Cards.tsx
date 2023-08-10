import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


export function Cards() {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
        <Image 
          style={styles.imagemComida}
          source={require('../../assets/img/pao.png')}
        />
        <Text style={styles.nomeComida}>Pão de queijo</Text>
        <View style={styles.infoComida}>
          <Text style={styles.preco}>R$6,90</Text>
          <Text style={styles.kcal}>150kcal</Text>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 20,
    width: 150,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 5,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.00,
  },
  card: {
    
  },

  imagemComida: {
    width: 110,
    height: 90,
    marginBottom: 10,
  },

  nomeComida:{
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  infoComida:{
    flexDirection: 'row',
  },
  preco: {
    color: '#FA321A',
    marginRight: 7
  },
  kcal: {
    color: '#6C6C6C',
  },
});