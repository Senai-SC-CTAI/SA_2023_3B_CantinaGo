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
  });

  // Hook de navegação para redirecionamento entre telas.
  const navigation = useNavigation();

  // Função para voltar à tela "Home" pela flechinha.
  function back() {
    navigation.navigate('Home');
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
      <View style={styles.header}>
        {/* Botão para voltar à tela anterior */}
        <TouchableOpacity onPress={back}>
          <Feather
            name="arrow-left"
            size={38}
            color="#FA321A"
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Comidas</Text>
      </View>

      <View style={styles.card}>
        {/* Exibindo o nome do alimento */}
        <Text style={styles.titleComida}>{selectedFood.nome}</Text>
        {/* Exibindo a categoria do alimento */}
        <Text style={styles.categoriaComida}>{selectedFood.category}</Text>
        {/* Exibindo a imagem do alimento */}
        <Image
          style={styles.imagemComida}
          source={selectedFood.foto}
          resizeMode="contain"
        />
        {/* Exibindo as calorias do alimento */}
        <Text style={styles.calorias}>{selectedFood.caloria} kcal</Text>

        {/* Título para a seção de ingredientes */}
        <Text style={styles.tituloIgredientes}>Ingredientes</Text>
        {/* Exibindo a lista de ingredientes */}
        <View style={styles.igredientes}>
          {selectedFood.ingredientes.map((ingrediente, index) => (
            <Text key={index} style={styles.textoIgredientes}>
              • {ingrediente}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        {/* Exibindo o preço do alimento */}
        <Text style={styles.precoTexto}>R${selectedFood.preco}</Text>
      </View>
    </View>
  );
}
