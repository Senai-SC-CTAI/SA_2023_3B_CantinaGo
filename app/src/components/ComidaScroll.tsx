import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
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


export function ComidaScroll(props: { category: string }) {
  const filteredContent = Content.filter(item => item.category === props.category);

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

})

  return (


    <View style={styles.container}>
      <Text style={styles.tituloComidas}>{props.category}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollComidas}
        showsHorizontalScrollIndicator={false}
      >
       {filteredContent.map((item, index) => (
          <Cards 
            key={index}
            id={item.id}
            foto={item.foto}
            nome={item.nome}
            preco={item.preco}
            caloria={item.caloria} 
          />
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