import { View, Text, ScrollView,StyleSheet,ActivityIndicator } from "react-native";
import React, { useState } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
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
  const {logout} = useAuth();
  const logoutUser = async () => {
    await logout();
    navigation.navigate("Bienvenido");
  }
  return (
      <ScrollView>
      <View style={styles.view}>
        <View style = {styles.view2}>
        <StatusBar style="auto" />
        <GeneralTxt
          Txt="Bienvenido a Tripy"
          style={{ width: "100%", fontSize: 30, textAlign: "left" }}
        />
        <Ionicons name="menu" size={30} style={{ marginLeft: 50 }} onPress={() => setVisible(!visible)}/>
        </View>
        {visible && (
          <SideBar
            userNav={() => navigation.navigate("MiPerfil")}
            HomeNav={() => navigation.navigate("LandPage")}
            ExpensesNav={()=>navigation.navigate("AgendarGastos")}
            RequestNav={()=>navigation.navigate("Solicitudes")}
            TravelsNav={()=>navigation.navigate("CrearViaje")}
            LogoutNav={logoutUser}
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
        <Boxes onPress={()=>navigation.navigate("Destino")}/>
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
    justifyContent: 'left',
    paddingLeft: 16,
    alignItems: 'center'
  }
})
