  import * as React from 'react';
  import { View, Image, Text, TouchableOpacity } from 'react-native';
  import { Feather } from '@expo/vector-icons';
  import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; // Hook para navegação.
  import { useState, useEffect } from 'react';


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
  
  import {localImages} from '../Home/index';


  //Componente principal da tela Food.
  export function Food() {
    const [selectedContent, setSelectedContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const route = useRoute<RouteProp<FoodRouteParams, 'Food'>>();
    const itemId = route.params?.itemId;



    // Carregando as fontes definidas no objeto useFonts.
    useFonts({
      Inter_400Regular,
      Inter_700Bold,
      Inter_600SemiBold,
      Inter_500Medium,
      Inter_800ExtraBold
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8090/comidas');
          const data = await response.json();
          
          // Filtra o conteúdo com base no ID
          const selectedData = data.filter(item => item.id === parseInt(itemId, 10));
  
          if (selectedData.length > 0) {
            setSelectedContent(selectedData[0]);
          } else {
            console.log('Comida não encontrada');
          }
        } catch (error) {
          console.error('Erro ao buscar as categorias:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [itemId]);

    
    console.log('itemId:', itemId);
    console.log("comida", selectedContent);

  
    const { nome, ingredientes, preco, calorias } = selectedContent;

  

    const navigation = useNavigation();
    function back() {
      navigation.goBack();
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
          <View style={{marginLeft: 20, flex: 1}}>
            {/* Exibindo o nome do alimento */}
            <Text style={styles.titleComida} numberOfLines={3} ellipsizeMode="tail" >{selectedContent.nome}</Text>
            {/* Exibindo a categoria do alimento */}
            <Text style={styles.categoriaComida}>{selectedContent.nome}</Text>
          </View>
        </View>
        <Image
          style={styles.backgroundImage}
          source={require('../../../assets/img/FoodDesign2.png')} 
        />

          <View style={{alignItems:'center', width: '100%'}}>
            <Image
              style={styles.imagemComida}
              source={localImages[itemId - 24]}
              resizeMode="contain"
            />
          </View>
        <View style={styles.card}>
          {/* Exibindo a imagem do alimento */}
          {/* Exibindo as calorias do alimento */}
          <Text style={styles.calorias}>{selectedContent.calorias} kcal</Text>

          {/* Título para a seção de ingredientes */}
          <Text style={styles.tituloIgredientes}>Ingredientes</Text>
          {/* Exibindo a lista de ingredientes */}
          <View style={styles.igredientes}>
              <Text style={styles.textoIgredientes}>
                • {selectedContent.ingredientes}
              </Text>
          </View>
        </View>

        <View style={styles.cardPrice}>
          {/* Exibindo o preço do alimento */}
          <Text style={styles.precoTexto}>R${selectedContent.preco}</Text>
        </View>
      </View>
      
      
    );
  }
