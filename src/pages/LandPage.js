import { View, Text, ScrollView,StyleSheet,} from "react-native";
import React, { useState,useEffect } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import SearchBar from "../components/SearchBar";
import Boxes from "../components/Boxes";
import SideBar from "../components/Sidebar/SideBar";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";



export default function LandPage() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const { logout,user } = useAuth();
  
  const logoutUser = async () => {
    await logout();
    navigation.navigate("Bienvenido");
  }
  const {t, i18next} = useTranslation();
  return (
      <ScrollView>
      <View style={styles.view}>
        <View style = {styles.view2}>
        <StatusBar style="auto" />
        <GeneralTxt
          Txt={t("WelcomeText")}
          style={{ width: "100%", fontSize: 30, textAlign: "left" }}
        />
        <Ionicons name="menu" size={30} style={{ marginLeft: 50 }} onPress={() => setVisible(!visible)}/>
        </View>
        {visible && (
          <SideBar
            userName={user ? user.name : ""}
            userNav={() => navigation.navigate("MiPerfil")}
            HomeNav={() => navigation.navigate("LandPage")}
            TravelsConsultNav={() => navigation.navigate("EditarMyViajes")}
            RequestNav={()=>navigation.navigate("Solicitudes")}
            TravelsNav={()=>navigation.navigate("CrearViaje")}
            ChatNav={()=>navigation.navigate("Contactos")}
            LogoutNav={logoutUser}
          />
        )}
        <SearchBar />
        <View>
        <GeneralLittleTxt
          Txt={t("ChooseDestination")}
          style={{
            width: "100%",
            fontSize: 20,
            textAlign: "left",
            marginLeft: 30,
            marginTop: -39,
          }}
        />
        <Boxes/>
        </View>
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
    alignItems: 'center',
  }
})
