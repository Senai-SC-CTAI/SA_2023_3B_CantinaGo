import { position } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    user: { 
      flex: 1,
      backgroundColor: '#FFFFFF',
      display:'flex',
      alignItems:'center',
    }, 

      feedback: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        display:'flex',
        alignItems:'center',
      },

    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '136.5%',
        height: 90,
        top: 0,
        alignItems: 'center',
        
      },
      buttom:{
        backgroundColor: "#FA321A",
        width: 140,
        height: 40,
        textAlign:'center',
        justifyContent:'center',
        display:'flex',
        marginTop: 40,
        borderRadius: 10
      },
      inputBox: {
        backgroundColor:"#F4F4F4",
        width:286,
        height:272,
        display: 'flex',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
        fontFamily: "Inter_500Medium"
      
    },

    TextInput: {
      marginTop: 10,
      marginLeft: 15,
      color: '#6A6A6A',  
    },

      feedBackImage:{
        width: 140,
        height: 140,
        resizeMode:'contain',
        backgroundColor: "#FA321A",
        borderRadius: 100,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 75,
        marginTop: 60
      },
      title:{
        fontSize:36,
        color:"#000000",
        marginLeft:20,
        marginRigth: 173,
        fontFamily: "Inter_700Bold"
      },
  })

  export default styles;