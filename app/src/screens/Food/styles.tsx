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
    top: 0,
    alignItems: 'center'
  },

  title: {
    fontSize:36,
    color:"#000000",
    marginLeft:20,
    fontWeight:"bold"
  },

  card: {
    backgroundColor: '#f4f4f4',
    width: '80%',
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.00,
  },

  titleComida: {
    fontSize:36,
    color:"#000000",
    fontFamily:"Inter_700Bold",
  },

  categoriaComida: {
    fontSize:20,
    color:"#7A7A7A",
    fontFamily:"Inter_600SemiBold"
  },

  imagemComida: {
    width: 200,
    height: 200,
    marginLeft: 20,
  },
  
  calorias: {
    fontSize:25,
    color:"#7A7A7A",
    marginBottom: 20,
    fontFamily:"Inter_600SemiBold"
  },

  tituloIgredientes: {
    color: '#7A7A7A'
  },

  igredientes: {
    marginLeft: 5,
    marginBottom: 20,
  },

  textoIgredientes: {
    color: '#7A7A7A',
    fontFamily:"Inter_400Regular",
    fontSize:12,
    
  },

  precoTexto: {
    fontSize:25,
    color:"#FA321A",
    fontWeight:"bold",
    textAlign: 'center',
    marginRight: 20,
  },
})

export default styles; 