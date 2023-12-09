import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
import GeneralText from "../GeneralComponents/GeneralText";
import React from "react";

export default function Viaje({ Txt, OnPress, color, companions,date,expenses,location, killTravel,isOwner }) {
  const longText = "Gastos a compartir \n Fecha del viaje\nGastos hasta el momento: $";
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.view} onPress={OnPress}>
        <GeneralText
          text={"Gastos a compartir"}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={20}
          paddingRight={20}
          paddingTop={20}
        />
        <GeneralText
          text={location}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={20}
          paddingRight={20}
        />
        <View style={styles.imageContainer}>
          <Image source={require("../../images/userIcon.png")} style={styles.image} />
          <GeneralText
          text={companions}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={5}
          paddingRight={20}
          marginTop={3}
        />
        </View>
        
        <GeneralText
          text={date}
          color="#fff"
          size={12}
          width_={268}
          paddingLeft={20}
          paddingRight={20}
          paddingBottom={20}
          marginTop={-15}
        />
        <GeneralText
          text={`$${expenses}`}
          color="#fff"
          size={12}
          width_={268}
          padding_={20}
          marginTop={-40}
          marginBottom={-20}
        />
        <Text style={[styles.buttonText, color]}>{Txt}</Text>
      </TouchableOpacity>
      {isOwner && (
        <TouchableOpacity style={styles.addButton} onPress={killTravel}>
        <Text style={styles.addButtonText}>Dar de baja</Text>
      </TouchableOpacity>
      )}
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
    backgroundColor: "red", // Change the color as needed
    borderRadius: 30,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 15,
  },
  deleteButton:{
    position: "absolute",
    bottom: 10,
    right: 60,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer:{
    flexDirection: "row",
  }
});
