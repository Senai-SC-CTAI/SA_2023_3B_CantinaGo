import { position } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative'
  },
  header: {
    marginTop: 35,
    marginLeft: 35,
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  bigText: {
    fontSize: 35,
    fontFamily:"Inter_700Bold"
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

  datePicker: {
    position: 'absolute',
    top: 95,
    left: 33,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    width: '80%',
    fontWeight: 'bold',


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.00,

  },

  diaSemana: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily:"Inter_700Bold"
  },
  diaMes: {
    fontSize: 15,
    color: '#FA321A',
    marginLeft: 2,
    fontFamily:"Inter_700Bold"
  },
  user: {
    width: 70,
    height: 70,

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

export default styles;