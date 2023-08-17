import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { background } from 'native-base/lib/typescript/theme/styled-system';

export function User() {
    return (
        <View style={styles.container}>
            
        <View style={styles.header}>
        <Feather 
        name="arrow-left" 
        size={38} 
        color="#FA321A" 
        style={{ marginLeft: 20 }} 
        />
         <Text style={styles.title}>Feedback</Text>
        </View>
        <View style={styles.feedBackImage}><Image source={require("../../../assets/img/feedback-img.svg")} style={{width: 89, height: 82,}}/>
        </View>
        <View>
            <TextInput placeholder='Adicione um comentario...' placeholderTextColor={"#6A6A6A"} style={styles.inputComment}></TextInput>
        </View>
        <View>
            <TouchableOpacity style={styles.buttom}><Text style={{color:"white", fontWeight: 'bold'}}>Enviar</Text></TouchableOpacity>  
        </View>
        </View>
        
    );
}


    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      display:'flex',
      alignItems:'center',
     
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 90,
        top: 0,
        alignItems: 'center'
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
      inputComment:{
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
        fontWeight:"bold"
    
      },
  })