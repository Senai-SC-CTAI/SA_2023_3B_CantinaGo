import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 32,
    marginBottom: 27,
    marginTop: 80,
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
    fontSize: 14,
    color: '#FA321A',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    width: 134,
    height: 134,
    resizeMode: "contain",
    marginTop: -50,
  },
  button: {
      marginBottom: 30,
        backgroundColor: '#FA321A',
        borderRadius: 10,
        height: 40,
        width:140,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
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
  texty: {
    fontSize: 14,
    color: '#7A7A7A'
  },
  inputs: {
    width: '100%'
  },
})

export default styles;