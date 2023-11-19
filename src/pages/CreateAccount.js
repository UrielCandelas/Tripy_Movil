import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import AnimatedInput from "../components/AnimatedInput";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {

  const navigation = useNavigation();
  const { signup,isAuthenticated } = useAuth();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  const handleSubmit = () => {
      navigation.navigate("CreateAccount2",{name,lastName,secondLastName});
  }
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt="Crear cuenta" style={{ width: 175 }} />
      <GeneralLittleTxt
        Txt="Información Personal"
        marginTop={-150}
        marginBottom={20}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Nombre(s)"
          duration={300}
          width={"70%"}
          height={60}
          onChange={setName}
          value={name}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Apellido Paterno"
          duration={300}
          width={"70%"}
          height={60}
          style={{ flexDirection: "row", justifyContent: "center" }}
          onChange={setLastName}
          value={lastName}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label="Apellido Materno"
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={false}
          onChange={setSecondLastName}
          value={secondLastName}
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
