import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Hook para navegação em uma aplicação React Navigation.
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Categoria } from '../../components/Categoria';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import Content from '../../data/Content';

type CategoryRouteParams = {
  Category: {
    category: string;
  };
};


export function Category() {  
  const route = useRoute<RouteProp<CategoryRouteParams, 'Category'>>();
  const selectedCategory = route.params?.category;

  const navigation = useNavigation();
  
  function back() {
    navigation.goBack();
  }

  const categoryFoods = Content.filter(item => item.category === selectedCategory);

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
        <Text style={styles.title}>{selectedCategory}</Text>
      </View>
      <View style={styles.categoriaRows}>
        <Categoria categoryFoods={categoryFoods} />
      </View>

      </View>
        
    );
}





 