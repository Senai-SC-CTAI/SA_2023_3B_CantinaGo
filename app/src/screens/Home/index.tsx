import * as React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { ComidaScroll } from '../../components/ComidaScroll';
import styles from './styles';

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
  }  from '@expo-google-fonts/inter';



export function Home() {

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

})
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View>
            <Text style={styles.bigText}>Bom dia!</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.infoHeader}>
            <View style={styles.buttonCalendario}>
              <Image 
                style={styles.calendario}
                source={require('../../../assets/img/calendario.svg')}
              />
            </View>
            <View>
              <Text style={styles.diaSemana}>Quarta-Feira</Text>
              <Text style={styles.diaMes}>2 de Agosto</Text>
            </View>
          </View>
        </View>
        <Image 
              style={styles.user}
              source={require('../../../assets/img/User.svg')}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.containerComida}>
          <ComidaScroll category="Salgados" />
          <ComidaScroll category="Doces" />
          <ComidaScroll category="Bebidas" />
        </View>
      </View>
    </ScrollView>
  );
}

