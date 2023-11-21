import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/Destino/Viaje";
import Cuadritos from "../components/Destino/Cuadritos";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useLocations } from "../context/LocationContext";
import { useAuth } from "../context/AuthContext";

export default function VerViajes1() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const { getAllLocationTravelsFunc, locationTravels,getAllExpensesFunc,expenses } = useTravels();
  const { getSomeLocation, location } = useLocations();
  const { getUser, userById } = useAuth();
  useEffect(() => {
    getAllLocationTravelsFunc(id);
    getSomeLocation(id);
    getAllExpensesFunc(id);
    getUser(id);
  },[]);
  const names = [];
  for (let index = 0; index < userById.length; index++) {
    names.push(userById[index].name);
  }
  const ex = [];
  for (let index = 0; index < expenses.length; index++) {
    ex.push(expenses[index].quantity)
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Ionicons
        style={styles.back}
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.texto1}>{location.location_name}</Text>

      <View style={styles.row}>
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
      </View>
      <View style={styles.desc}>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Descripción:"
          marginTop={50}
        />
        <GeneralText
          color="#1D1E20"
          size={15}
          height={18}
          text={location.description}
          marginTop={10}
          marginBottom={20}
        />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Ubicación:"
          marginTop={20}
        />
        <GeneralText
          color="#1D1E20"
          size={15}
          height={18}
          text={location.location}
          marginTop={10}
          marginBottom={10}
        />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Horario:"
          marginTop={20}
        />
        <GeneralText
          color="#1D1E20"
          size={15}
          height={18}
          text={location.schedule}
          marginTop={10}
          marginBottom={20}
        />
      </View>

      {locationTravels.map((travel, i) => (
        <Viaje
          key={i}
          User={names[i]}
          Companions={travel.companions}
          Date={travel.travel_date}
          Expenses={ex[i]}
          onPress={() => navigation.navigate("UnirseViaje",{name: names[i],companions: travel.companions})}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  arrow: {
    marginTop: 60,
    marginLeft: -50,
  },
  row: {
    flexDirection: "row",
  },
  desc: {
    marginLeft: 30,
    alignSelf: "flex-start",
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "15%",
  },
  texto1: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "20%",
  },
});
