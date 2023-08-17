import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FA321A',
    fontWeight:  'bold'
  },
  input: {
    width: '50%',
    borderRadius: 10,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
  },
  link: {
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  image: {
    width: 200, // Defina a largura desejada da imagem
    padding: 40,
    height: 200, // Defina a altura desejada da imagem
    resizeMode: 'contain', // Modo de redimensionamento da imagem
    marginBottom: 80, // Espaçamento superior
  },
  button: {
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 10,
  },
  viewInput: {
    width: 290,
    height: 37,
    backgroundColor: "#F4F4F4",
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputsInfo: {

  },
  inputs: {
    width: '100%'
  },
})

export default styles;