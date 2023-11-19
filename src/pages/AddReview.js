import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TouchableOpacity, TextInput} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Cards from "../components/Cards";
import Reseñas from "../components/Reseñas";

export default function AddReview({navigation}) {

  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  }

  const handlePress = () => {
  }

  return (

    <View>
      <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=>navigation.goBack()}
        />

        <Text style={styles.texto1}>Añadir reseña</Text>

        <Text style={styles.texto5}>¿Cómo fue tu experiencia?</Text>
        <SafeAreaView style={styles.input}>
        <TextInput style={{ padding: 8,}} placeholder="Describe tu experiencia con este usuario"/>
        </SafeAreaView>

        <Text style={styles.texto5}>Calificación</Text>

        <View style={styles.container3}>
        <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleStarPress(index)}
          >
            <Ionicons
              name={index <= rating ? 'star' : 'star-outline'}
              size={30}
              color="gold"
            />
          </TouchableOpacity>))}
      </View>
        </View>


    <TouchableOpacity style={{backgroundColor: '#64CCC5', width:'100%', justifyContent: 'center', height: 75, bottom: 0, alignItems: 'center'}} onPress={()=>navigation.goBack()}>
        <Text style={styles.texto6}>Enviar reseña</Text>
      </TouchableOpacity>
    </View>



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
    paddingTop: "30%",
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

  texto5: {
    color: "black",
    fontSize: 17,
    fontWeight: 'bold',
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: '17%',
  },

  texto6: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 17,
  },


  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },

  input: {
    height: 210,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  container3: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: '18%',
  },

  starContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },


});
