import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        backgroundColor: '#f5f5f5',
      },
      title: {
        color: '#FA321A',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily:'inter',
      },
      texty: {
        fontSize: 15,
        marginBottom: 10,
      },
      cadastro: {
        fontSize: 15,
        marginBottom: 10,
        color: '#FA321A',
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
        paddingHorizontal: 10, // Adicionado padding horizontal
        marginBottom: 10,
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
    })
    
    export default styles;
