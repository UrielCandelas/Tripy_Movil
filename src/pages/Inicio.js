import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import AnimatedInput from "../components/AnimatedInput";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function Inicio() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  const { isAuthenticated, signin } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("LandPage");
    }
  }, [isAuthenticated]);

  const onSubmit = async() => {
    try {
      const res = await signin({email, password});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt="Iniciar sesión" style={{ width: 175 }} />
      <GeneralLittleTxt
        Txt="Ingresa tus datos para continuar"
        style={{ marginTop: -150, marginBottom: 20 }}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Usuario / correo electrónico"
          duration={300}
          width={"70%"}
          height={60}
          value={email}
          onChange={setEmail}
          keyboardType={"email-address"}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Contraseña"
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={true}
          value={password}
          onChange={setPassword}
        />
      </TouchableWithoutFeedback>
      <GeneralButton2
        Txt="Continuar"
        style={{
          backgroundColor: "#64CCC5",
          marginTop: 50,
          width: "60%",
          height: "25%",
        }}
        color="white"
        onPress={onSubmit}
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
