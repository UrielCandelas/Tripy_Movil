import React from "react";
import { Text, View,StyleSheet, ScrollView } from "react-native";
import { styles } from "../styles/Styles_AgregarGastos";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

  export default function AgregarGastos({navigation}) {

  return(
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Ionicons
            style={styles.back}
            name="arrow-back"
            size={24}
            color="black"
            onPress={()=>navigation.goBack()}
        />

        <Text style={styles.texto1}>Añadir gasto</Text>
      </View>

    </ScrollView>


    )};

