import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import GeneralText from '../components/GeneralComponents/GeneralText'
import Viaje from '../components/Destino/Viaje'
import Cuadritos from '../components/Destino/Cuadritos'
import { StatusBar } from "expo-status-bar";
import { useNavigation,useRoute } from '@react-navigation/native';

export default function VerViajes1() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=> navigation.goBack()}
        />
        
        <Text style={styles.texto1}>Destino</Text>

      <View style={styles.row}>
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
      </View>
      <View style={styles.desc}>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Descripción"
          marginTop={50}
        />

        <GeneralText
          color="#1D1E20"
          size={15}
          height={18}
          text="Descripción del lugar"
          marginTop={10}
          marginBottom={20}
        />
      </View>

      <Viaje onPress={()=>navigation.navigate("UnirseViaje")}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  arrow: {
    marginTop: 60,
    marginLeft: -50,
  },
  row: {
    flexDirection: 'row',
  },
  desc: {
    marginLeft: 30,
    alignSelf: 'flex-start',
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
})
