import GeneralButton from "../GeneralComponents/GeneralButton";
import GeneralText from "../GeneralComponents/GeneralText";
import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Sidebar = ({ userNav, HomeNav, RequestNav, TravelsNav,LogoutNav,userName,TravelsConsultNav,ChatNav }) => {
  return (
    <View style={styles.sidebar}>
      <ScrollView>
        <TouchableOpacity
          onPress={userNav}
          style={[styles.section, styles.header]}
        >
          <>
            <GeneralText text={userName} />
          </>
        </TouchableOpacity>
        <TouchableOpacity onPress={HomeNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="home" size={20} style={styles.images}/>
            <GeneralText text="Inicio" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={TravelsConsultNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="map" size={20} style={styles.images}/>
            <GeneralText text="Consultar viajes" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ChatNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="md-chatbubbles-sharp" size={20} style={styles.images}/>
            <GeneralText text="Mensajes" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={RequestNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="notifications" size={20} style={styles.images}/>
            <GeneralText text="Solicitudes" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={TravelsNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="add-circle" size={20} style={styles.images}/>
            <GeneralText text="Crear viaje" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={LogoutNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="log-out" size={20} color="red" style={styles.images}/>
            <GeneralText text="Cerrar Sesion" color={"red"}/>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fefefe",
    padding: 20,
    paddingTop: 50,
    width: "70%",
    position: "absolute",
    zIndex: 1,
    height: "100%",
  },
  section: {
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    marginBottom: "25%",
  },
  object: {
    flexDirection: 'row'
  },
  images:{
    marginRight: 10,
  }
});

export default Sidebar;
