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
import { useTranslation } from "react-i18next";

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
  const  {t, i18n} = useTranslation();
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt={t('CreateAccount')} style={{ width: 175 }} />
      <GeneralLittleTxt
        Txt={t('PersonalInfo')}
        marginTop={-150}
        marginBottom={20}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('Name')}
          duration={300}
          width={"70%"}
          height={60}
          onChange={setName}
          value={name}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('LastName1')}
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
          label={t('LastName2')}
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={false}
          onChange={setSecondLastName}
          value={secondLastName}
        />
      </TouchableWithoutFeedback>
      <GeneralButton2
        Txt={t('Continue')}
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
