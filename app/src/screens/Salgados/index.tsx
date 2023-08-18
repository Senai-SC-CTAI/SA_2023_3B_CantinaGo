import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import {ComponenteSalgado}  from './component';

export function Salgados() {

  return (
    <View style={styles.container}>
        <ComponenteSalgado/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})