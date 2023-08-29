import * as React from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook para navegação.


//Sim isso é necessário. (Deve ter alguma forma mais eficiente....)
export function Cards(props: { id: React.Key | null | undefined; foto: ImageSourcePropType; nome: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; preco: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; caloria: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  // Hook de navegação para redirecionamento entre telas.
  const navigation = useNavigation();

  // Função para navegar para a tela Food e passar o ID do item como parâmetro, assim ao clicar vai para o alimento selecionado.
  function goToFood() {
    navigation.navigate("Food", { itemId: props.id });
  }
  
  return (
    // Ao clicar, vai para o alimento selecionado
    <TouchableOpacity style={styles.container} onPress={goToFood}>
      <View style={styles.card}>
        {/* Imagem do item */}
        <Image 
          style={styles.imagemComida}
          source={props.foto}
          resizeMode="contain" 
        />
        {/* Nome do item */}
        <Text style={styles.nomeComida}>{props.nome}</Text>
        <View style={styles.infoComida}>
          {/* Preço do item */}
          <Text style={styles.preco}>R${props.preco}</Text>
          {/* Valor calórico do item */}
          <Text style={styles.kcal}>{props.caloria}kcal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 20,
    width: 150,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.00,
  },
  card: {
    
  },
  imagemComida: {
    width: 110,
    height: 90,
    marginBottom: 10,
  },
  nomeComida:{
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  infoComida:{
    flexDirection: 'row',
  },
  preco: {
    color: '#FA321A',
    marginRight: 7
  },
  kcal: {
    color: '#6C6C6C',
  },
});