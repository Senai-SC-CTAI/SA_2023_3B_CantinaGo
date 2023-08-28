import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Hook para navegação em uma aplicação React Navigation.
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Categoria } from '../../components/Categoria';
import styles from './style';
import { Feather } from '@expo/vector-icons';

export function Category() {  
 
  const navigation = useNavigation();
  
  function back() {
  navigation.navigate("Search");
}
    return (
        <View style={styles.container}>
             <View style={styles.header}>
        <TouchableOpacity
         onPress={back}>
          <Feather
            name="arrow-left"
            size={38}
            color="#FA321A"
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Nome Categoria</Text>
      </View>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            <Categoria/>
            
            

        </View>
        
    );
}





 