import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

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
        </View>
        {/* <View style={styles.feedBackImage}><Image source={require()}></View> */}
        <View>
            <TextInput placeholder='Adicione um comentario...' placeholderTextColor={"#6A6A6A"} style={{backgroundColor:"F4F4F4"}}></TextInput>
        </View>
        <View>
            <TouchableOpacity style={styles.buttom}><Text>Enviar</Text></TouchableOpacity>  
        </View>
        </View>
        
    );
}


    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
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
      buttom:{

      },
  })