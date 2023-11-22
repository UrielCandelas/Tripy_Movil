import {
  View,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Svg, { Rect } from "react-native-svg";
import GeneralText from "../components/GeneralComponents/GeneralText";
import GeneralButton from "../components/GeneralComponents/GeneralButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";

export default function VerMiViaje() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    name,
    companions,
    expenses,
    extras,
    destination,
    typeofExpenses,
    id_user1,
    id_travel,
  } = route.params;
  const { getAllExtrasFunc, extra, addRequest } = useTravels();
  const { user } = useAuth();
  const windowWidth = Dimensions.get("window").width;
  const handleSubmit = async () => {
    const id = user.id;
    try {
      Alert.alert(
        "Solicitar Viaje",
        "¿Estás seguro de que quieres solicitar un viaje con este usuario?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: async () => {
              await addRequest({ id_user1, id_user2: id, id_travel });
              navigation.navigate("LandPage");
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllExtrasFunc(extras);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>

      <View>
        <Svg width={windowWidth} height="100">
          <Rect
            x="0"
            y="-100"
            width={windowWidth}
            height="1000"
            fill="#f2f2f2"
          />
        </Svg>
      </View>
      <GeneralText
        text={destination}
        color="#1D1E20"
        fontWeight="bold"
        marginBottom={20}
        size={20}
      />
      <GeneralText
        style={styles.GeneralText}
        text={name}
        size={20}
        marginBottom={20}
      />
      <GeneralText
        text="Se comparten los gastos de"
        color="#1D1E20"
        size={20}
      />
      <GeneralText text={typeofExpenses} color="#176B87" size={20} />
      <Image source={require("../images/userIcon.png")} style={styles.image} />
      <GeneralText
        text="Maximo de personas en el viaje"
        color="#1D1E20"
        size={20}
      />
      <GeneralText text={companions} color="#176B87" size={20} />
      <GeneralText text="Gasto total Aproximado" color="#1D1E20" size={20} />
      <GeneralText text={`$${expenses}`} color="#176B87" size={20} />
      <GeneralText
        text="Requisitos Extra"
        color="#1D1E20"
        marginBottom={"20"}
        size={20}
      />
      <GeneralText
        text={extra ? extra.extra_commentary : "No hay requisitos extra"}
        color="#176B87"
        size={20}
      />
      <GeneralButton
        text="Solicitar unirse viaje"
        colorText="#FEFEFE"
        colorBg="#64CCC5"
        padding={20}
        width={"100%"}
        marginTop={"59%"}
        onPressHandler={handleSubmit}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginTop: 60,
    marginRight: 330,
  },
  image: {
    width: 12,
    height: 12,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  GeneralText: {
    marginTop: 20,
  },
  back: {
    top: -20,
    left: -150,
    padding: 16,
    paddingTop: "15%",
    marginTop: 20,
    zIndex: 1,
  },
});
