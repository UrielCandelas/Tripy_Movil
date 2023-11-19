import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GeneralLittleTxt from "./GeneralComponents/GeneralLittleTxt";
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useEffect } from "react";

export default function Boxes() {
  const navigation = useNavigation();
  const { locations, getLocations } = useLocations();
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <View style={styles.container}>
      {locations.map((location, i) => (
        <View style={styles.box} key={i}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Destino", {id: location.id});
            }}
          >
            <View style={styles.inner}>
              <Text style={styles.text}>{location.location_name}</Text>
            </View>
          </TouchableOpacity>
          <GeneralLittleTxt Txt={location.location_name} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    padding: 10,
  },
  inner: {
    flex: 1,
    backgroundColor: "#E7E8EA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 250, // Altura máxima por caja
  },
  text: {
    color: "black",
  },
});
