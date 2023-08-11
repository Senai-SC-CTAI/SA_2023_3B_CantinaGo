import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ComidaScroll } from '../../components/ComidaScroll'
import { useNavigation } from '@react-navigation/native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 35,
    marginLeft: 35,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  line: {
    width: 150,
    height: 3,
    backgroundColor: '#FA321A',
    marginTop: 5,
  },
  infoHeader: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonCalendario: {
    width: 35,
    height: 35,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    marginRight: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.00,

    justifyContent: 'center',
    alignItems: 'center'
  },

  calendario: {
    width: 22,
    height: 22,
    
  },

  diaSemana: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -5,
  },
  diaMes: {
    fontSize: 12,
    color: '#FA321A',
    fontWeight: '700',
    marginLeft: 2,
  },
  user: {
    width: 70,
    height: 70,
    marginLeft: '20%'
  },
  main: {
    marginLeft: 35,
    marginTop: 50,
  },

  containerComida:{
    marginBottom:20,
  },

  tituloComidas: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
  },
  scrollComidas: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#f4f4f4',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 25,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.00,
    marginRight: 20,
    borderRadius: 10,
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