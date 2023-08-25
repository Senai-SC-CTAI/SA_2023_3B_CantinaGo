import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
  }  from '@expo-google-fonts/inter';


export function Food() {
  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

})
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

        <Text style={styles.title}>Comidas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titleComida}>Pão de Queijo</Text>
        <Text style={styles.categoriaComida}>Salgados</Text>
        <Image
          style={styles.imagemComida}
          source={require('../../../assets/img/pao.png')}
          resizeMode="contain"
        />
        <Text style={styles.calorias}>150 kcal</Text>

        <Text style={styles.tituloIgredientes}>Igredientes</Text>
        <View style={styles.igredientes}>
          <Text style={styles.textoIgredientes}>• 200g de queijo meia cura ralado grosso</Text>
          <Text style={styles.textoIgredientes}>• 200g de polvilho azedo</Text>
          <Text style={styles.textoIgredientes}>• 100ml de leite</Text>
          <Text style={styles.textoIgredientes}>• 40g de manteiga</Text>
          <Text style={styles.textoIgredientes}>• 1 ovo inteiro</Text>
          <Text style={styles.textoIgredientes}>• sal a gosto</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.precoTexto}>R$6,90</Text>
      </View>
    </View>
  );
}

