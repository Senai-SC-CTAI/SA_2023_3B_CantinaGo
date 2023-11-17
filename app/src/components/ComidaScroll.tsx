import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Cards } from './Cards';
import Content from "../data/Content";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

export function ComidaScroll(props: { categoria: string }) {
  console.log('Categoria prop in ComidaScroll:', props.categoria);
  const [comidas, setComidas] = useState([]);
  const navigation = useNavigation();

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium
  });

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const response = await fetch('http://localhost:8090/comidas?categoria=' + props.categoria);
        const data = await response.json();
        setComidas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchComidas();
  }, [props.categoria]);

  console.log(comidas);

  return (
    <View style={styles.container}>
      <Text style={styles.tituloComidas}>{props.categoria}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollComidas}
        showsHorizontalScrollIndicator={false}
      >
      {comidas.map((item, index) => (
          item.categoria === props.categoria && (
            // Wrap each card with TouchableOpacity to make it clickable
            <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Food', { itemId: item.id })}
          >
              <Cards
                id={item.id}
                foto={{ uri: item.foto }}
                nome={item.nome}
                preco={item.preco}
                caloria={item.calorias}
              />
            </TouchableOpacity>
          )
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tituloComidas: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
  },
  scrollComidas: {
    flexDirection: 'row',
  },
});