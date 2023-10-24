import { View, Text, ScrollView,StyleSheet } from "react-native";
import React, { useState } from "react";
import GeneralLittleTxt from "../components/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralTxt";
import SearchBar from "../components/SearchBar";
import Boxes from "../components/Boxes";
import GeneralButton from "../components/GeneralButton";
import SideBar from "../components/Sidebar/SideBar";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function LandPage({ navigation }) {
  const [visible, setVisible] = useState(true);
  return (
    <ScrollView>
      <View style={styles.view}>
        <View style = {styles.view2}>
        <StatusBar style="auto" />
        <GeneralTxt
          Txt="Bienvenido a Tripy"
          style={{ width: "80%", fontSize: 30, textAlign: "left" }}
        />
        <Ionicons name="menu" size={25} onPress={() => setVisible(!visible)}/>
        </View>
        {visible && (
          <SideBar
            userNav={() => navigation.navigate("MiPerfil")}
            HomeNav={() => navigation.navigate("LandPage")}
            ExpensesNav={()=>navigation.navigate("AgendarGastos")}
            RequestNav={()=>navigation.navigate("Solicitudes")}
            TravelsNav={()=>navigation.navigate("CrearViaje")}
          />
        )}
        <SearchBar />
        <GeneralLittleTxt
          Txt="Escoje un destino"
          style={{
            width: "100%",
            fontSize: 20,
            textAlign: "left",
            marginLeft: 30,
            marginTop: -39,
          }}
        />
        <Boxes Txt="Box" />
        <Boxes Txt="Box" />
        <Boxes Txt="Box" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  view2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
