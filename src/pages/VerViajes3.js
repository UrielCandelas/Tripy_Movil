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

import { useTranslation } from "react-i18next";
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
        t("RequestTrip"),
        t("Question3"),
        [
          {
            text: t("Cancel"),
            style: "cancel",
          },
          {
            text: t("Confirm"),
            onPress: async () => {
              await addRequest({ id_user1, id_user2: id, id_travel });
              navigation.navigate("LoadingScreen");
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
  const { t, i18n } = useTranslation();
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
        text={t("ShareSpent")}
        color="#1D1E20"
        size={20}
      />
      <GeneralText text={typeofExpenses} color="#176B87" size={20} />
      <Image source={require("../images/userIcon.png")} style={styles.image} />
      <GeneralText
        text={t("MaxPerson")}
        color="#1D1E20"
        size={20}
        alignText="center"
      />
      <GeneralText text={companions} color="#176B87" size={20} />
      <GeneralText text={t("TotalCost2")} color="#1D1E20" size={20} />
      <GeneralText text={`$${expenses}`} color="#176B87" size={20} />
      <GeneralText
        text={t("ExtraRequests")}
        color="#1D1E20"
        marginBottom={"20"}
        size={20}
      />
      <GeneralText
        text={extra ? extra.extra_commentary : t("XtraRequests")}
        color="#176B87"
        size={20}
      />
      <View style={styles.buttonContainer}>
          <GeneralButton
            text={t("JoinTrip")}
            colorText="#FEFEFE"
            colorBg="#64CCC5"
            padding={20}
            width={"100%"}
            height={75}
            onPressHandler={handleSubmit}
          />
      </View>
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
    left: -150,
    padding: 16,
    paddingTop: "15%",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 0,
},
});

/*
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
        //text={destination}
        color="#1D1E20"
        fontWeight="bold"
        marginBottom={20}
        size={20}
      />
      <GeneralText
        style={styles.GeneralText}
        //text={name}
        size={20}
        marginBottom={20}
      />
      <GeneralText
        text={t("ShareSpent")}
        color="#1D1E20"
        size={20}
      />
      <GeneralText text={typeofExpenses} color="#176B87" size={20} />
      <Image source={require("../images/userIcon.png")} style={styles.image} />
      <GeneralText
        text={t("MaxPerson")}
        color="#1D1E20"
        size={20}
        alignText="center"
      />
      <GeneralText text={companions} color="#176B87" size={20} />
      <GeneralText text={t("TotalCost2")} color="#1D1E20" size={20} />
      <GeneralText text={`$${expenses}`} color="#176B87" size={20} />
      <GeneralText
        text={t("ExtraRequests")}
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
        text={t("JoinTrip")}
        colorText="#FEFEFE"
        colorBg="#64CCC5"
        padding={20}
        width={"100%"}
        height={60}
        onPressHandler={handleSubmit}
      />
    </ScrollView>
  );

*/