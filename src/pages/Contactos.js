import React, { useRef, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Arrowback from "../components/VerViajes/Arrowback";

import ContactsContainer  from '../components/Chat/ContactsContainer';
import { useNavigation } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { io } from "socket.io-client";
import { useTranslation } from "react-i18next";

export default function Contactos() {
  const navigation = useNavigation();
  //const socket = useRef();
  const { user, getUserContacts, contacts } = useAuth();
  const [currentChat, setCurrentChat] = useState(undefined);
  /*const host = "http://192.168.0.10:3000";
  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit("add-user", user.id);
    }
  }, [user]);*/
  useEffect(() => {
    getUserContacts(user ? user.id : 0);
  }, []);
const {t, i18next} = useTranslation();
  return (
    <View style={{ flex: 1, backgroundColor: "#FEFEFE" }}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
          color={"transparent"}
          onPresshandler={() => navigation.goBack()}
        />
        <View>
          <GeneralText
            color="#FFFFFF"
            size={30}
            marginTop={30}
            text={t("tittleContacts")}
          />
          <GeneralText
            color="white"
            size={17}
            height={18}
            text={t("Contact")}
            marginTop={0}
            marginLeft={0}
          />
        </View>
      </View>
        <ContactsContainer contacts = {contacts} /*socket = {socket}*//>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 120,
    backgroundColor: "#64CCC5",
    zIndex: 1000,
    position: "absolute",
    top: 0,
  },
  arrow: {
    marginTop: 40,
    marginLeft: 10,
  },
  messagecontainer: {
    backgroundColor: "transparent",
    borderTopWidth: 2,
    borderTopColor: "#E8E8E8",
    display: "flex",
    flexDirection: "row",
  },
});
