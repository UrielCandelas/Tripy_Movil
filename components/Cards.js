import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Cards({ onPress }) {
  return (
    <View>
      <ScrollView horizontal={true}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <Text style={styles.texto1c}>Gastos a compartir</Text>
            <Text style={styles.texto2c}>
              <FontAwesome5 name="user-friends" size={15} color="white" />
            </Text>
            <Text style={styles.texto2c}>$</Text>
            <Text style={styles.texto2c}>Fecha del viaje</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <Text style={styles.texto1c}>Gastos a compartir</Text>
            <Text style={styles.texto2c}>
              <FontAwesome5 name="user-friends" size={15} color="white" />
            </Text>
            <Text style={styles.texto2c}>$</Text>
            <Text style={styles.texto2c}>Fecha del viaje</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <Text style={styles.texto1c}>Gastos a compartir</Text>
            <Text style={styles.texto2c}>
              <FontAwesome5 name="user-friends" size={15} color="white" />
            </Text>
            <Text style={styles.texto2c}>$</Text>
            <Text style={styles.texto2c}>Fecha del viaje</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 230,
    height: 160,
    backgroundColor: "#001C30",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 16,
  },

  texto1c: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    top: 0,
    left: 0,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
  },

  texto2c: {
    fontSize: 12,
    color: "white",
    top: 0,
    left: 0,
    paddingTop: 6,
    paddingBottom: 10,
    paddingLeft: 16,
  },
});
