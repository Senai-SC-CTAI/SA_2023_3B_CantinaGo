import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Salgados() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={38}
          color="#FA321A"
          style={{ marginLeft: 20 }}
        />
        <Text></Text>
      </View>
      <View style={styles.foodContainer}>
        <View>
          <Image source={require(".././../../assets/img/pao.png")} />
          <View>
            <Text>Pão de Queijo</Text>
            <Text>150 kcal</Text>
            <Text>R$6,90</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 90,
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  foodContainer: {},
});
