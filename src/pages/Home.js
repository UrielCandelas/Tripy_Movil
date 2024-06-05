import { View, TouchableOpacity, Text } from "react-native";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import GeneralTxt from "../components/GeneralComponents/GeneralTxt";
import { useEffect } from "react";
import GeneralLittleTxt from "../components/GeneralComponents/GeneralLittleTxt";
import { AntDesign } from "@expo/vector-icons";

import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function Home() {
	const navigation = useNavigation();
	const { isAuthenticated, promptAsyncFunc: promptAsync } = useAuth();
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
				style={{ backgroundColor: "#DAFFFB", height: 50, marginBottom: 30 }}
				onPress={() => {
					navigation.navigate("Inicio");
				}}
			/>
			<View style={styles.googleContainer}>
				<TouchableOpacity
					style={styles.googleButton}
					onPress={() => promptAsync()}
				>
					<AntDesign
						name="google"
						size={24}
						color="black"
						style={styles.googleIcon}
					/>
					<Text style={styles.googleText}>Continue with Google</Text>
				</TouchableOpacity>
			</View>
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
	Txt3: {
		margin: 30,
		textAlign: "center",
		color: "black",
	},
	googleContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	googleButton: {
		padding: 20,
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: 335,
		backgroundColor: "#FFFFFF",
	},
	googleText: {
		marginLeft: 10,
	},
	googleIcon: {},
};
