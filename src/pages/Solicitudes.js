import React, { useEffect } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Soli from "../components/Soli";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const Solicitudes = () => {
	const navigation = useNavigation();
	const { user } = useAuth();
	const { getUserRequest, requests, addTravelSecondUser, deleteRequest } =
		useTravels();

	useEffect(() => {
		getUserRequest(user ? user.id : 0);
	}, []);

	const request = requests.request;
	const travels = requests.travels;
	const locations = requests.locations;
	const users = requests.users;

	const handleAccept = async (data) => {
		try {
			Alert.alert(
				"Aceptar usuario",
				"¿Estás seguro de que quieres aceptar a este usuario?",
				[
					{
						text: "Cancelar",
						style: "cancel",
					},
					{
						text: "Confirmar",
						onPress: async () => {
							await addTravelSecondUser(data);
							navigation.navigate("LandPage");
						},
					},
				],
				{ cancelable: false },
			);
		} catch (error) {
			console.log(error);
		}
	};
	const handleDecline = (data) => {
		try {
			const cancelText = t("Cancel");
			const confirmText = t("Confirm");
			Alert.alert(
				"Eliminar Solicitud",
				"¿Estás seguro de que quieres eliminar la solicitud de este usuario?",
				[
					{
						text: cancelText,
						// text: "Cancel"
						style: "cancel",
					},
					{
						text: confirmText,
						// text: "Confirmar"
						onPress: async () => {
							await deleteRequest(data);
						},
					},
				],
				{ cancelable: false },
			);
		} catch (error) {
			console.log(error);
		}
	};
	const { t } = useTranslation();
	return (
		<View style={styles.crearViaje}>
			<StatusBar style="auto" />
			<Ionicons
				style={styles.back}
				name="arrow-back"
				size={24}
				color="black"
				onPress={() => navigation.goBack()}
			/>

			<Text style={styles.texto1}>{t("SideBarRequests")}</Text>

			<SafeAreaView>
				<ScrollView>
					{request?.map((data, i) => {
						if (data.isActive) {
							return (
								<Soli
									key={i}
									location={locations[i].location_name}
									date={travels[i].travel_date}
									user={users[i].name}
									onPressAccept={() => {
										const values = {
											id_user2: users[i].id,
											id_travel: travels[i].id,
											id_request: data.id,
										};
										return handleAccept(values);
									}}
									onPressReject={() => {
										return handleDecline({ id_request: data.id });
									}}
									onPress={() =>
										navigation.navigate("PerfilUsuario", {
											name: users[i].name,
											id: users[i].id,
										})
									}
								/>
							);
						}
						return null;
					})}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
		marginLeft: 50,
	},
	back: {
		position: "absolute",
		top: 0,
		left: 0,
		padding: 16,
		paddingTop: "15%",
	},
	texto1: {
		fontSize: 20,
		fontWeight: "bold",
		alignSelf: "center",
		top: 0,
		left: 0,
		padding: 16,
		paddingTop: "20%",
	},
	texto2: {
		fontSize: 20,
		padding: 16,
		paddingTop: "10%",
		color: "#176B87",
	},
});

export default Solicitudes;
