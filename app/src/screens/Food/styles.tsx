import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    display:'flex',
    alignItems:'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    top: 20,
  },

  title: {
    fontSize:36,
    color:"#000000",
    marginLeft:20,
    fontWeight:"bold",
    marginRight: 100,

  },

  card: {
    backgroundColor: '#F4F4F4',
    width: '60%',
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
    position: 'relative'
  },

  backgroundImage: {
    position: 'absolute',
    top: 70,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  titleComida: {
    fontSize:36,
    color:"#000000",
    fontFamily:"Inter_700Bold",
    marginRight: 20,
    
  },

  categoriaComida: {
    fontSize:20,
    color:"#7A7A7A",
    fontFamily:"Inter_600SemiBold"
  },

  imagemComida: {
    width: 230,
    height: 230,
  },
  
  calorias: {
    fontSize:25,
    color:"#FF4630",
    marginBottom: 20,
    fontFamily:"Inter_800ExtraBold",
    textAlign: 'center',
    marginRight: 20,
  },

  tituloIgredientes: {
    color: '#5B5B5B',
    fontWeight: 'bold'
  },

  igredientes: {
    marginLeft: 5,
    marginBottom: 20,
  },

  textoIgredientes: {
    color: '#5B5B5B',
    fontFamily:"Inter_400Regular",
    fontSize:12,
    
  },

  cardPrice: {
    backgroundColor: '#F4F4F4',
    width: '40%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.00,
  },

  precoTexto: {
    fontSize:20,
    color:"#FA321A",
    fontWeight:"bold",
    textAlign: 'center',
  },
})


export default styles; 