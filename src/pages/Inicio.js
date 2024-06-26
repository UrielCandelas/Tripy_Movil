import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import AnimatedInput from "../components/AnimatedInput";
import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function Inicio() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  const { isAuthenticated, signin, errors: loginErrors } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("LandPage");
    }
  }, [isAuthenticated]);

  const onSubmit = async () => {
    if (
      email === "" ||
      password === "" ||
      email === " " ||
      password === " "
    ) {
      showToast(t("EMessage"));
      return;
    }
    signin({ email, password });
  }
  const showToast = (text2) => {
    Toast.show({
      type: "error",
      text1: t("ErrorM"),
      text2,
      visibilityTime: 3000,
      position: "bottom",
      bottomOffset: 50,
    });
  };
  useEffect(() => {
    loginErrors.forEach((error, index) => {
      showToast(error);
    });
  }, [loginErrors])
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt={t('Login2')} style={{ width: 175 }} />
      <GeneralLittleTxt
        Txt={t('EnterDetails')}
        style={{ marginTop: -150, marginBottom: 20 }}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('Email')}
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
          label={t('Password')}
          duration={300}
          width={"70%"}
          height={60}
          secureTextEntry={true}
          value={password}
          onChange={setPassword}
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
