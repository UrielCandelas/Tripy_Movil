import React from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Soli from "../components/Soli";

const Solicitudes = ({ navigation }) => {
  return (
    <View style={styles.crearViaje}>
      <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=> navigation.goBack()}
        />
        
        <Text style={styles.texto1}>Solicitudes</Text>
      
        <SafeAreaView>
            <ScrollView>
              <Soli/>
              <Soli/>
              <Soli/>
            </ScrollView>
        </SafeAreaView>

    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 50,
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "15%",
  },
  texto1: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "20%",
  },
});

export default Solicitudes;
