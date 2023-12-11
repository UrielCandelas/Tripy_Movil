import { View } from "react-native";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import { useEffect } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import Loading from "../components/Loading/Loading";

import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigation = useNavigation();
  const { isAuthenticated, loading } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("LandPage");
    }
  }, [isAuthenticated]);
  const  {t, i18n} = useTranslation();
  return (
    <View>
          <GeneralTxt Txt={t('WelcomeText')} />
          <GeneralButton2
        Txt={t('CreateAccount')}
        color="white"
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      />
      <GeneralLittleTxt
        Txt={t('Login1')}
        marginTop={20}
        marginBottom={20}
      />
      <GeneralButton2
        Txt={t('Login2')}
        style={{ backgroundColor: "#DAFFFB" }}
        onPress={() => {
          navigation.navigate("Inicio");
        }}
      />
    </View>
  );
}
