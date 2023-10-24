import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TouchableOpacity, TextInput} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Cards from "../components/Cards";
import Reseñas from "../components/Reseñas";

export default function App({navigation}) {


  return (

    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=> navigation.goBack()}
        />

        <Text style={styles.texto1}>Usuario</Text>

        <Image
          source={require("../images/Default_pfp.png")}
          style={styles.roundImage}
        />

        <Text style={styles.texto2} onPress={()=>navigation.navigate("EditarPerfil")}>Editar perfil</Text>

        <View style={styles.container1}>
          <Text style={styles.texto3}>Mis viajes</Text>
          <Text style={styles.texto4} onPress={()=>navigation.navigate("VerViajes1")}>Ver todo</Text>
        </View>

        <SafeAreaView style={styles.containercards}>
          <ScrollView horizontal><Cards onPress={()=>navigation.navigate("VerViajesExis")}/></ScrollView>
        </SafeAreaView>

        <SafeAreaView style={styles.containerreviews}>
          <ScrollView><Reseñas onPress={()=>navigation.navigate("PerfilUsuario")}/></ScrollView>
        </SafeAreaView>
      </View>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  containercards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  containerreviews: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  text: {
    fontSize: 20,
    margin: 20,
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

  texto2: {
    color: "#8F959E",
    fontSize: 15,
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 16,
  },

  texto3: {
    fontSize: 17,
    fontWeight: "bold",
    top: 0,
    left: 0,
    padding: 16,
  },

  texto4: {
    fontSize: 15,
    color: "#8F959E",
    top: 0,
    right: 0,
    padding: 16,
  },


  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },


});
