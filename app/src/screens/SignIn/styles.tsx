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
        fontWeight: 'bold',
        marginBottom: 41,
        marginTop: 80,
      
      },
      texty: {
        fontSize: 14,
        color: '#7A7A7A'
      },
      cadastro: {
        fontSize: 14,
        color: '#FA321A',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
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
        outline: 'none',
      },
      button: {
        marginBottom: 50,
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
        fontSize: 19,
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
      errorText: {
        color: "red"
      }
    })
    
    export default styles;