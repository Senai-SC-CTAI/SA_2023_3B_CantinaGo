import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Cards } from './Cards';

export function ComidaScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloComidas}>Salgados</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollComidas}
        showsHorizontalScrollIndicator={false}
      >
        <Cards />
        <Cards />
        <Cards />
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