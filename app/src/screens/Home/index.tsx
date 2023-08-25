import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { ComidaScroll } from '../../components/ComidaScroll';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function back() {
    navigation.navigate("User");
  }

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
                source={require('../../../assets/icons/calendario.svg')}
              />
            </View>
            <View>
              <Text style={styles.diaSemana}>Quarta-Feira</Text>
              <Text style={styles.diaMes}>2 de Agosto</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{
          marginLeft: 50,
        }}
        onPress={back}>
          <Image 
                style={styles.user}
                source={require('../../../assets/img/User.svg')}
          />
        </TouchableOpacity>
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

