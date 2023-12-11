import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Toast from "react-native-toast-message";
import React, { useState, useEffect } from "react";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import AnimatedInput from "../components/AnimatedInput";
import { useAuth } from "../context/AuthContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading/Loading";

export default function CreateAccount2() {
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("LandPage");
    }
  }, [isAuthenticated]);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  const handleSubmit = () => {
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      userName === " " ||
      email === " " ||
      password === " "
    ) {
      Toast.show({
        type: "error",
        text1: "Ocurrio un error",
        text2: "Por favor rellene todos los campos",
        visibilityTime: 3000,
        position: "bottom",
        bottomOffset: 50,
      });
      return;
    }
    signup({
      name: data.name,
      lastName: data.lastName,
      secondLastName: data.secondLastName,
      userName,
      email,
      password,
      confirmPassword,
    });
  };
  registerErrors.forEach((error, index) => {
    Toast.show({
      type: "error",
      text1: "Ocurrio un error",
      text2: error,
      visibilityTime: 3000,
      position: "bottom",
      bottomOffset: 50,
    });
  });
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt="Crear cuenta" style={{ width: 175 }} />

      <GeneralLittleTxt
        Txt="Ingresa los datos que se solicitan"
        marginTop={-150}
        marginBottom={20}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Usuario"
          duration={300}
          width={"70%"}
          height={60}
          onChange={setUserName}
          value={userName}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Correo eléctronico"
          duration={300}
          keyboardType={"email-address"}
          width={"70%"}
          height={60}
          onChange={setEmail}
          value={email}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Contraseña"
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={true}
          onChange={setPassword}
          value={password}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Confirmar Contraseña"
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={true}
          onChange={setConfirmPassword}
          value={confirmPassword}
        />
      </TouchableWithoutFeedback>
      <GeneralButton2
        Txt="Continuar"
        style={{
          fontSize: 40,
          backgroundColor: "#64CCC5",
          marginTop: 50,
          width: "60%",
          height: "25%",
        }}
        color="white"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
