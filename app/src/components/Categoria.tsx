import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Content from '../data/Content'; // Import your content data file

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export function Categoria(props: { categoryFoods: typeof Content }) {
  const navigation = useNavigation();

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {props.categoryFoods.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Food', { itemId: item.id })}
        >
          <View style={styles.foodContainer}>
            <Image source={item.foto} style={styles.ImageComida} />
            <View style={styles.Information}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.caloria}>{item.caloria} kcal</Text>
              <Text style={styles.preco}>R${item.preco}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  foodContainer: {
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    width: '80%',
    height: 80,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 10,

    alignSelf: 'center'
  },
  Information: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 20,
  },
  ImageComida: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 10,
  },
  nome: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  caloria: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    color: '#7A7A7A',
  },
  preco: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#FA321A',
  },
});
