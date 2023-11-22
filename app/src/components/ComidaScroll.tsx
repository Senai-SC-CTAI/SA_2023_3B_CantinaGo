import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {localImages} from '../screens/Home/index';


export function ComidaScroll(props: { categoria: string }) {
  console.log("Categoria prop in ComidaScroll:", props.categoria);
  const [comidas, setComidas] = useState([]);
  const navigation = useNavigation();

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const response = await fetch(
          "http://localhost:8090/comidas?categoria=" + props.categoria
        );
        const data = await response.json();
        setComidas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchComidas();
  }, [props.categoria]);

  console.log(comidas);

  return (
    <View style={styles.container}>
      <Text style={styles.tituloComidas}>{props.categoria}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollComidas}
        showsHorizontalScrollIndicator={false}
      >
        {comidas.map(
          (item, index) =>
            item.categoria === props.categoria && (
              // Wrap each card with TouchableOpacity to make it clickable
              <TouchableOpacity
                key={index}
                style={styles.cardContainer}
                onPress={() => navigation.navigate("Food", { itemId: item.id })}
              >
                <View style={styles.card}>
                  <Image
                    style={styles.imagemComida}
                    source={localImages[item.id - 24]} 
                    resizeMode="contain"
                  />
                  <Text style={styles.nomeComida}>{item.nome}</Text>
                  <View style={styles.infoComida}>
                    <Text style={styles.preco}>R${item.preco}</Text>
                    <Text style={styles.kcal}>{item.calorias}kcal</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  tituloComidas: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
  },
  scrollComidas: {
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
    shadowRadius: 5.0,
  },
  card: {},
  imagemComida: {
    width: 110,
    height: 90,
    marginBottom: 10,
  },
  nomeComida: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
  },
  infoComida: {
    flexDirection: "row",
  },
  preco: {
    color: "#FA321A",
    marginRight: 7,
  },
  kcal: {
    color: "#6C6C6C",
  },
});
