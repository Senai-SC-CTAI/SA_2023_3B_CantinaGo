import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'

  },
  user: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'

  },

  feedback:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    display:'flex',
    alignItems:'center',
  },

  image: {
    width: 120, 
    height: 120,
    resizeMode: 'contain',
    marginTop:20
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    position: 'absolute',
    alignItems: 'center',
  },
  title:{
    fontSize:36,
    color:"#000000",
    marginLeft:20,
    fontWeight:"bold"

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
    marginTop: 50,
  },

  inputsInfo: {

  },
  inputs: {
    width: '100%'
  },
  feedbackText: {
    display: 'flex',
    textAlign: 'center'
  },
  profilePicture: {
    marginBottom: 50,
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