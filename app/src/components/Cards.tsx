import * as React from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';


export function Cards(props: { id: React.Key | null | undefined; foto: ImageSourcePropType; nome: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; preco: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; caloria: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <TouchableOpacity key={props.id} style={styles.container}>
        <View style={styles.card}>
        <Image 
          style={styles.imagemComida}
          source={props.foto}
          resizeMode="contain" 
        />
        <Text style={styles.nomeComida}>{props.nome}</Text>
        <View style={styles.infoComida}>
          <Text style={styles.preco}>R${props.preco}</Text>
          <Text style={styles.kcal}>{props.caloria}kcla</Text>
        </View>
      </View>
    </TouchableOpacity>
    
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