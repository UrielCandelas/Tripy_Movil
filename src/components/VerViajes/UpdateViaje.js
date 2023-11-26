import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
import GeneralText from "../GeneralComponents/GeneralText";
import React from "react";

export default function Viaje({ Txt, OnPress, color }) {
  const longText = "Gastos a compartir \n Fecha del viaje\nGastos hasta el momento: $";
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.view}>
        <GeneralText
          text={"Gastos a compartir"}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={20}
          paddingRight={20}
          paddingTop={20}
        />
        <Image source={require("../../images/userIcon.png")} style={styles.image} />
        <GeneralText
          text={"Fecha del viaje"}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={20}
          paddingRight={20}
          paddingBottom={20}
          marginTop={-15}
        />
        <GeneralText
          text={"Gastos hasta el Momento: $"}
          color="#fff"
          size={12}
          width_={268}
          padding_={20}
          marginTop={-40}
        />
        <Text style={[styles.buttonText, color]}>{Txt}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={OnPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={OnPress}>
        <Text style={styles.addButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  view: {
    backgroundColor: "#001C30",
    borderRadius: 10,
    height: "auto",
    width: 334,
    flexShrink: 0,
    paddingLeft: 30,
    marginBottom: 20,
  },
  image: {
    width: 12,
    height: 12,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  buttonText: {
    // Your existing button text styles
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 5,
    backgroundColor: "green", // Change the color as needed
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  deleteButton:{
    position: "absolute",
    bottom: 10,
    right: 60,
    backgroundColor: "red", // Change the color as needed
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  }
});
