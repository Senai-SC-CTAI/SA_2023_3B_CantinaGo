import * as React from 'react';
import { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { User } from '../User'

import styles from './style'

export function Feedback() {
  
  
    const [showUser, setShowUser] = useState(false);
    const [showFeedback, setShowFeedback] = useState(true);
  
    return (
        <View>
        {showUser && (
        <View style={styles.user}>
          <User />
        </View> 
        )}
        {showFeedback && (
        <View style={styles.feedback}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { setShowUser(true); setShowFeedback(false); }}>
            <Feather 
            name="arrow-left" 
            size={38} 
            color="#FA321A" 
            style={{ marginLeft: 20 }} 
            />
          </TouchableOpacity>
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
        )}
        </View>
        
    );
}


 