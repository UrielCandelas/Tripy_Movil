import { View } from "react-native";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import { useEffect } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";

import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function Home() {
	const navigation = useNavigation();
	const { isAuthenticated } = useAuth();
	useEffect(() => {
		if (isAuthenticated) {
			navigation.navigate("LandPage");
		}
	}, [isAuthenticated]);
	const { t } = useTranslation();
	return (
		<View>
			<GeneralTxt Txt={t("WelcomeText")} style={styles.Txt} />
			<GeneralButton2
				Txt={t("CreateAccount")}
				style={{ height: 50 }}
				color="white"
				onPress={() => {
					navigation.navigate("CreateAccount");
				}}
			/>
			<GeneralLittleTxt Txt={t("Login1")} style={styles.Txt1} />
			<GeneralButton2
				Txt={t("Login2")}
				style={{ backgroundColor: "#DAFFFB", height: 50 }}
				onPress={() => {
					navigation.navigate("Inicio");
				}}
			/>
		</View>
	);
}
const styles = {
	Txt: {
		marginTop: 200,
		textAlign: "center",
		color: "black",
		fontSize: 35,
		width: "70%",
	},
	Txt1: {
		margin: 30,
		textAlign: "center",
		color: "black",
	},
};
