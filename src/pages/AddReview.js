import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

export default function AddReview() {
  const navigation = useNavigation();
  const route = useRoute();
  const { registerNewCommentary,user } = useAuth();
  const {id} = route.params;

  const [rating, setRating] = useState(0);
  const [comentary, setComentary] = useState("");

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleSubmit = async () => {
    try {
      const res = await registerNewCommentary({
        comentary,
        rating,
        id_userComent: user.id,
        id_userComented: id
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
const {t, i18next} = useTranslation();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Ionicons
        style={styles.back}
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.texto1}>{t("AddReview")}</Text>

      <Text style={styles.texto5}>{t("Question")}</Text>
      <SafeAreaView style={styles.input}>
        <TextInput
          style={{ padding: 8 }}
          placeholder={t("UserDescription")}
          value={comentary}
          onChangeText={setComentary}
        />
      </SafeAreaView>

      <Text style={styles.texto5}>{t("Qualification")}</Text>

      <View style={styles.container3}>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleStarPress(index);
              }}
            >
              <Ionicons
                name={index <= rating ? "star" : "star-outline"}
                size={30}
                color="gold"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#64CCC5",
          width: "100%",
          justifyContent: "center",
          height: 75,
          alignItems: "center",
          position: 'absolute',
          bottom: 0,
        }}
        onPress={handleSubmit}
      >
  <Text style={styles.texto6}>{t("SendReview")}</Text>
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
    fontWeight: "bold",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "17%",
  },

  texto6: {
    color: "white",
    fontWeight: "bold",
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
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: "18%",
  },

  starContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
});
