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
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  image: {
    width: 134,
    height: 134,
    resizeMode: "contain",
    marginTop: 40,
  },
  button: {
    marginBottom: 62,
    marginTop: 36,
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
    fontWeight: 'bold',
    fontSize: 15,
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
    fontSize: 15,
    marginBottom: 10,
  },
  inputs: {
    width: '100%'
  },
})

export default styles;