import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      alignItems:'center',
      backgroundColor: '#FFFFFF'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 90,
      top: 20,
      alignItems: 'center',
    },
    title:{
        fontSize:36,
        color:"#000000",
        marginLeft:20,
        fontWeight:"bold",
        marginRigth: 173,
      },
    categoriaRows: {
      marginTop: 60,
      width: '100%'

    }
   
  })

  export default styles;