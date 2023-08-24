import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        backgroundColor: '#ffffff',
      },
      title: {
        color: '#FA321A',
        fontSize: 32,
        marginBottom: 41,
        marginTop: 80,
        fontFamily:"Inter_700Bold",
       
      
      },
      texty: {
        fontSize: 15,
        marginBottom: 10,
        fontFamily:"Inter_500Medium"
      },
      cadastro: {
        fontSize: 15,
        marginBottom: 10,
        color: '#FA321A',
        fontFamily:"Inter_500Medium",
        textDecorationLine:'underline',
      },
      input: {
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        width: '80%',
        height: 40,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10, 
        marginBottom: 26,
        backgroundColor:"#F4F4F4",
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
      inputs: {
        width: '100%'
      },
    })
    
    export default styles;