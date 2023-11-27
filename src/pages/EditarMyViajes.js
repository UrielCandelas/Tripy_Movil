import React, { useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/VerViajes/UpdateViaje";
import Arrowback from "../components/VerViajes/Arrowback";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function EditarMyViajes() {
  const navigation = useNavigation();
  const { getTravelsActive, travelsActive,deleteSomeTravel } = useTravels();
  const { user } = useAuth();
  useEffect(() => {
    getTravelsActive(user.id);
  }, []);

  const travels = travelsActive.travels;
  const sharedTravels = travelsActive.sharedTravels;
  const locations_user1 = travelsActive.locations_user1;
  const expenses_user1 = travelsActive.expenses_user1;
  const extras_user1 = travelsActive.extras_user1;
  const locations_user2 = travelsActive.locations_user2;
  const expenses_user2 = travelsActive.expenses_user2;
  const extras_user2 = travelsActive.extras_user2;

  const killSomeTravel = async(id)=>{
    try {
      const res = await deleteSomeTravel(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
          onPresshandler={() => navigation.goBack()}
          color="#F2F2F2"
        />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="UserName"
          marginTop={60}
          marginLeft={80}
          marginRight={"28%"}
        />
      </View>
      <Svg height="200" width="200">
        <Circle cx="100" cy="100" r="70" fill="#F2F2F2" />
      </Svg>
      <View>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Mis viajes"
          marginTop={10}
          marginBottom={20}
        />
        {travels?.map((travel, i) => (
          <Viaje
            key={i}
            companions={travel.companions}
            date={travel.travel_date}
            expenses={expenses_user1[i].quantity}
            location={locations_user1[i].location_name}
            killTravel={killSomeTravel(travel.id)}
            OnPress={() =>Alert.alert("conssultar travel")}
          />
        ))}
      </View>
      <View>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Viajes Compartidos"
          marginTop={10}
          marginBottom={20}
        />
        {sharedTravels?.map((travel, i) => (
          <Viaje
            key={i}
            companions={travel.companions}
            date={travel.travel_date}
            expenses={expenses_user2[i].quantity}
            location={locations_user2[i].location_name}
          />
        ))}
      </View>
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
    alignItems: "center",
  },
  arrow: {
    marginTop: 60,
    marginLeft: -12,
  },
});
