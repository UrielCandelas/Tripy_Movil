import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt2 from "../components/GeneralComponents/GeneralTxt2";
import SearchBar from "../components/SearchBar";
import Boxes from "../components/Boxes";
import SideBar from "../components/Sidebar/SideBar";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading/Loading";
import { useNavigation } from "@react-navigation/native";

export default function LandPage() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const { logout } = useAuth();

  const toggleSideBar = () => {
    setVisible(!visible);
  };

  const handleTouchablePress = () => {
    if (visible) {
      toggleSideBar();
    }
  };

  const logoutUser = async () => {
    await logout();
    navigation.navigate("Bienvenido");
  }
  const handleBoxPress = (screenName) => {
    if (!visible) {
      navigation.navigate(screenName);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchablePress}>
      <View>
        {visible && (
          <SideBar
            userNav={() => navigation.navigate("MiPerfil")}
            HomeNav={() => navigation.navigate("LandPage")}
            ContactsNav={() => navigation.navigate("Contactos")}
            ExpensesNav={() => navigation.navigate("AgendarGastos")}
            RequestNav={() => navigation.navigate("Solicitudes")}
            TravelsNav={() => navigation.navigate("CrearViaje")}
            LogoutNav={logoutUser}
          />
        )}
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.view2}>
              <StatusBar style="auto" />
                <Ionicons
                marginTop={30}
                marginLeft={-8}
                  name="menu"
                  size={50}
                  onPress={toggleSideBar}
                />
              <GeneralTxt2
                Txt="Bienvenido a Tripy"
                style={{
                  float: "left",
                }}
              />
            </View>
            <SearchBar />
            <GeneralLittleTxt
              Txt="Escoge un destino"
              style={{
                width: "100%",
                fontSize: 20,
                textAlign: "left",
                marginLeft: 30,
                marginBottom: 10,
              }}
            />
            <View style={styles.containerBox}>
              <Boxes
              />
              <Boxes
              />
              <Boxes
              />
              <Boxes/>
              <Boxes/>
              <Boxes/>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  view2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'left',
    paddingLeft: 16,
  },
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // ... otros estilos
})
