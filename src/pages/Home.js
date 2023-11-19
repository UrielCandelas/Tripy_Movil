import { View } from "react-native";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import { useEffect } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import Loading from "../components/Loading/Loading";

import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

export default function Home() {
  const navigation = useNavigation();
  const { isAuthenticated, loading } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("LandPage");
    }
  }, [isAuthenticated]);

  return (
    <View>
          <GeneralTxt Txt="Bienvenido a Tripy" />
          <GeneralButton2
        Txt="Crear una cuenta"
        color="white"
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      />
      <GeneralLittleTxt
        Txt="¿Ya tienes una cuenta?"
        marginTop={20}
        marginBottom={20}
      />
      <GeneralButton2
        Txt="Iniciar sesión"
        style={{ backgroundColor: "#DAFFFB" }}
        onPress={() => {
          navigation.navigate("Inicio");
        }}
      />
    </View>
  );
}
