import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/VerViajes/Viaje";
import Arrowback from "../components/VerViajes/Arrowback";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function VerViajes1() {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = useAuth();
  const { travels, extras, locations, expenses,name } = route.params;
  const {t, i18n} = useTranslation();
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
          text={name}
          marginTop={60}
          marginLeft={110}
          marginRight={"28%"}
        />
      </View>
      <Svg height="200" width="200">
        <Circle cx="100" cy="100" r="70" fill="#F2F2F2" />
      </Svg>
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text={t("ViewTrips")}
        marginTop={50}
        marginBottom={20}
      />
      {travels?.map((travel, i) => (
        <Viaje
          companions={travel.companions}
          key={i}
          location={locations[i].location_name}
          extras={extras[i]}
          expenses={expenses[i].quantity}
          date={travel.travel_date}
          isActive={travel.isActive}
          onPress={() => navigation.navigate("VerViajesExis", {
            location: locations[i].location_name,
            companions: travel.companions,
            expenses: expenses[i].quantity,
            expenses_name: expenses[i].expense,
            extras: extras[i] ? extras[i].extra_commentary: "Sin extras",
            isActive: travel.isActive,
          })}
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
    alignItems: "center",
  },
  arrow: {
    marginTop: 60,
    marginLeft: -50,
  },
});
