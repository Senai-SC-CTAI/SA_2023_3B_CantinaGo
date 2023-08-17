import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'

  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  },
  profileInfo: {
    marginBottom: 70
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

  profileContent: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  inputsInfo: {

  },
  inputs: {
    width: '100%'
  },
  feedback: {
    display: 'flex',
    textAlign: 'center'
  },
  profilePicture: {
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default styles;