import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  
    coverImage:{
      width:"100%",
      height:"100%",
      display:'flex',
      alignItems:'center',
      justifyContent:"center"
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 90,
      top: 0,
      alignItems: 'center'
    },
    inputSearchHolder: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F4F4F4',
      borderRadius: 200,
      height: 40,
      width: "90%",
      marginTop:10,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
  
    },
    title:{
      fontSize:36,
      color:"#000000",
      marginLeft:20,
      fontWeight:"bold"
  
    },
    searchItens:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
    },
    searchIten:{
      width:180,
      height:240,
      borderRadius:20,
      marginTop:10,
      display:'flex',
      textAlign:'center',
      alignItems:"center",
      justifyContent:"center",
      marginLeft:5,
      marginRight:5,
   
    },
    ItenSearchItens:{
      color:"#FFFFFF",
      fontSize:24,
      fontWeight:"bold"
    }
  })

  export default styles;