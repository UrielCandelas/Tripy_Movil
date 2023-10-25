import GeneralButton from "../GeneralButton";
import GeneralText from "../GeneralText";
import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Sidebar = ({ userNav, HomeNav, ExpensesNav, RequestNav, TravelsNav }) => {
  return (
    <View style={styles.sidebar}>
      <ScrollView>
        <TouchableOpacity
          onPress={userNav}
          style={[styles.section, styles.header]}
        >
          <>
            <GeneralText text="Usuario" />
          </>
        </TouchableOpacity>
        <TouchableOpacity onPress={HomeNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="home" size={20} style={styles.images}/>
            <GeneralText text="Inicio" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ExpensesNav} style={styles.section}>
          <View style={styles.object}>
            <Ionicons name="cash" size={20} style={styles.images}/>
            <GeneralText text="Añadir Gasto" />
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
            <Ionicons name="map" size={20} style={styles.images}/>
            <GeneralText text="Crear Viaje" />
          </View>
        </TouchableOpacity>
        {/* Agrega más enlaces según sea necesario */}
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
    marginRight: 10
  }
});

export default Sidebar;
