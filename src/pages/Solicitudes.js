import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Soli from "../components/Soli";
import { useTravels } from "../context/TravelsContext";

const Solicitudes = () => {
  const navigation = useNavigation();
  //const { user, getUserRequest, usersByRequest } = useAuth();
  const { datosDesdeBD, sendResponse, addTravelSecondUser,deleteRequest } = useTravels();
  //const { getLocationByTravelID, locationByTravel } = useLocations();
  const requests = datosDesdeBD.request;
  const travels = datosDesdeBD.travels;
  const locations = datosDesdeBD.locations;
  const users = datosDesdeBD.users;
  const handleAccept = async (data) => {
    try {
      Alert.alert(
        "Aceptar usuario",
        "¿Estás seguro de que quieres aceptar a este usuario?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: async () => {
              await addTravelSecondUser(data);
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecline = (data) => {
    try {
      Alert.alert(
        "Eliminar Solicitud",
        "¿Estás seguro de que quieres eliminar la solicitud de este usuario?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: async () => {
              await deleteRequest(data);
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.crearViaje}>
      <StatusBar style="auto" />
      <Ionicons
        style={styles.back}
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.texto1}>Solicitudes</Text>

      <SafeAreaView>
        <ScrollView>
          {requests.map((data, i) => {
            if (data.isActive) {
              return (
                <Soli
                  key={i}
                  location={locations[i].location_name}
                  date={travels[i].travel_date}
                  user={users[i].name}
                  onPressAccept={()=>{
                    const values = {
                      id_user2: users[i].id,
                      id_travel: travels[i].id,
                      id_request: data.id,
                    }
                    return handleAccept(values)
                  }}
                  onPressReject={()=>{
                    return handleDecline({id_request:data.id})
                  }}
                />
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 50,
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
  texto2: {
    fontSize: 20,
    padding: 16,
    paddingTop: "10%",
    color: "#176B87",
  },
});

export default Solicitudes;
