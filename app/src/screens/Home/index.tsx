import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ComidaScroll } from '../../components/ComidaScroll'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export function Home() {
  const navigation = useNavigation()
  function User(){
    navigation.navigate('User')
  }

  return (
    <View style={styles.container}>
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
          < ComidaScroll />
          < ComidaScroll />
          < ComidaScroll />
        </View>
      </View>
    </View>
  );
}

