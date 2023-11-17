  import * as React from 'react';
  import { View, Image, Text, TouchableOpacity } from 'react-native';
  import { Feather } from '@expo/vector-icons';
  import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; // Hook para navegação.

  import styles from './styles';
  import Content from '../../data/Content'; //Importação do BancoDeDados.

  import {
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_800ExtraBold
  } from '@expo-google-fonts/inter'; // Importação de fontes do Google Fonts usando Expo.

  // Definindo o tipo para os parâmetros da rota, previni erros bobos que não chegam a afetar o Site.
  type FoodRouteParams = {
    Food: {
      itemId: number; // Ou o tipo correto do seu ID.
    };
  };

  //Componente principal da tela Food.
  export function Food() {
    // Carregando as fontes definidas no objeto useFonts.
    useFonts({
      Inter_400Regular,
      Inter_700Bold,
      Inter_600SemiBold,
      Inter_500Medium,
      Inter_800ExtraBold
    });

    // Hook de navegação para redirecionamento entre telas.
    const navigation = useNavigation();

    // Função para voltar à tela "Home" pela flechinha.
    function back() {
      navigation.goBack();
    }

    // Obtendo a rota e o ID do alimento.
    const route = useRoute<RouteProp<FoodRouteParams, 'Food'>>();
    const itemId = route.params?.itemId;

    // Verificando se o ID do alimento está presente, novamente correção de erro chato.
    if (itemId === undefined) {
      // Lidar com o caso em que o itemId não é fornecido.
      return null;
    }

    // Encontrando o alimento com base no ID.
    const selectedFood = Content.find(item => item.id === itemId);

    // Verificando se o alimento foi encontrado, mais uma vez correção de errinho.
    if (!selectedFood) {
      // Lidar com o caso em que o alimento não é encontrado
      return null;
    }

    return (
      <View style={styles.container}>
       <Text>AAA</Text>
      </View>
      
      
    );
  }
