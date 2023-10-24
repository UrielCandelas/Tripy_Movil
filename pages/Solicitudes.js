import React from "react";
import { Text, View, Image, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles_CrearViaje";
import { Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

const Solicitudes = ({ navigation }) => {
  return (
    <View style={styles.crearViaje}>
      <View style={styless.header}>
        <Ionicons
          style={styless.backButton}
          name="arrow-back"
          size={28}
          color="black"
          onPress={() => navigation.navigate("LandPage")}
        />

        <Text style={styles.LabelCrearViaje}>Solicitudes</Text>
      </View>
      <ScrollView style={styles.viewsolicitudes}>
        <View style={styles.imagestyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilUsuario")}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={require("../images/row1.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imagestyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilUsuario")}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={require("../images/row1.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imagestyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilUsuario")}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={require("../images/row1.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imagestyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilUsuario")}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={require("../images/row1.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styless = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 50,
  },
  backButton: {
    marginTop: 36,
    marginRight: 70,
    marginLeft: -20,
  },
});

export default Solicitudes;
