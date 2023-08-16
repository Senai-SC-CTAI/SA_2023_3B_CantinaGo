import { StyleSheet } from "react-native"

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

export default styles;