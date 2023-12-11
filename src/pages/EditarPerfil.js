import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function EditarPerfil() {
  const { user, editAcount } = useAuth();
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");


  const handleSubmit = async () => {
    if ((!password || !newPassword || !confirmNewPassword || !userName || !newEmail)) {
      return Alert.alert("Todos los campos son requeridos");
    }
    const data = {
      newPassword,
      confirmNewPassword,
      userName,
      newEmail,
      password,
      email: user.email,
      id: user.id
    };
    try {
      await editAcount(data);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
  const {t, i18next} = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Ionicons
        style={styles.back}
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.edit}>{t("EditProfile")}</Text>

      <Image
        source={require("../images/Default_pfp.png")}
        style={styles.roundImage}
      />

      <View style={{ paddingTop: 20, paddingBottom: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DAFFFB",
            padding: 10,
            borderRadius: 10,
            width: 125,
            alignSelf: "center",
          }}
          onPress={handleSubmit}
        >
          <Text style={styles.texto5}>{t("SaveChanges")}</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView
        style={{ width: "92%", alignSelf: "center", paddingTop: 20 }}
      >
        <Text style={styles.texto6}>{t("User")}</Text>
        <TextInput
          style={styles.input}
          placeholder={user.userName}
          onChangeText={setUserName}
          value={userName}
        />
        <Text style={styles.texto6}>{t("Email")}</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder={user.email}
          onChangeText={setNewEmail}
          value={newEmail}
        />
        <Text style={styles.texto6}>{t("OldPassword")}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true} 
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.texto6}>{t("NewPassword")}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}  
          onChangeText={setNewPassword}
          value={newPassword}
        />
        <Text style={styles.texto6}>{t("ConfirmNewPassword")}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true} 
          onChangeText={setConfirmNewPassword}
          value={confirmNewPassword}
        />
      </SafeAreaView>
      {user.isAdmin && (
        <Text style={styles.eliminar}>{t("DeleteAccount")}</Text>
      )}
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
    alignSelf: "center",
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
    borderColor: "#E2E2E2",
    padding: 10,
    borderRadius: 5,
  },

  texto6: {
    fontSize: 15,
    color: "#6B7888",
    top: 0,
    right: 0,
    paddingLeft: 16,
  },

  eliminar: {
    fontSize: 15,
    color: "#FF5757",
    fontWeight: "bold",
    paddingTop: 25,
    alignSelf: "center",
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
