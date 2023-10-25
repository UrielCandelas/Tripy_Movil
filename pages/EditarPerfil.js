import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TouchableOpacity, TextInput} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export default function EditarPerfil({navigation}) {

  const handlePress = () => {
  }


  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=>navigation.goBack()}
        />

      <Text style={styles.edit}>Editar perfil</Text>

    <Image
      source={require("../images/Default_pfp.png")}
      style={styles.roundImage}
    />

    <View style={{paddingTop:20, paddingBottom: 10,}}>
    <TouchableOpacity style={{ backgroundColor: '#DAFFFB', padding: 10, borderRadius: 10, width:125, alignSelf: "center"}} onPress={()=>navigation.navigate("LandPage")}>
        <Text style={styles.texto5}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>



    <SafeAreaView style={{width: '92%', alignSelf:'center', paddingTop:20, }}>

      <Text style={styles.texto6}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />


      <Text style={styles.texto6}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />

      <Text style={styles.texto6}>Contraseña anterior</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />

      <Text style={styles.texto6}>Nueva contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />

      <Text style={styles.texto6}>Confirmar nueva contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />      
      
    </SafeAreaView>


    <Text style={styles.eliminar}>Eliminar cuenta</Text>






    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  back: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "15%",
  },

  texto5: {
    fontSize: 13,
    color: "black",
    top: 0,
    right: 0,
    alignSelf: 'center',
  },

  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 10,
    borderRadius: 5,
  },

  texto6: {
    fontSize: 15,
    color: "#6B7888",
    top: 0,
    right: 0,
    paddingLeft:16,
  },

  eliminar: {
    fontSize: 15,
    color: '#FF5757',
    fontWeight: 'bold',
    paddingTop: 25,
    alignSelf: 'center',
  },

  edit: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 25,
    paddingTop: "15%",
  },

});
