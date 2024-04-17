import React, { useEffect, useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/Destino/Viaje";
import Cuadritos from "../components/Destino/Cuadritos";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function VerViajes1() {
	const navigation = useNavigation();
	const route = useRoute();
	const { id, location } = route.params;

	const { getTravelsImg2, travels } = useLocations();

	const { user } = useAuth();

	useEffect(() => {
		getTravelsImg2(id);
	}, []);

	const tra = useMemo(() => travels?.travelCards, [travels]);
	const img = useMemo(() => travels?.image, [travels]);

	const names = [];
	const ex = [];
	const exName = [];

	const myId = user.id;
	const { t } = useTranslation();
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style="auto" />
			<Ionicons
				style={styles.back}
				name="arrow-back"
				size={24}
				color="black"
				onPress={() => navigation.goBack()}
			/>

			<Text style={styles.texto1}>{location?.location_name}</Text>

			<View style={styles.row}>
				<Cuadritos
					size={70}
					borderRadius={10}
					marginRight={20}
					marginTop={20}
					uri2={img.image}
				/>
			</View>
			<View style={styles.desc}>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={t("Description")}
					marginTop={50}
				/>
				<GeneralText
					color="#1D1E20"
					size={15}
					height={18}
					text={location.description}
					marginTop={10}
					marginBottom={20}
				/>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={t("Location")}
					marginTop={20}
				/>
				<GeneralText
					color="#1D1E20"
					size={15}
					height={18}
					text={location.location}
					marginTop={10}
					marginBottom={10}
				/>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={t("Schedule")}
					marginTop={20}
				/>
				<GeneralText
					color="#1D1E20"
					size={15}
					height={18}
					text={location.schedule}
					marginTop={10}
					marginBottom={20}
				/>
			</View>

			{tra?.map((travel, i) => {
				if (myId != travel.id_user1 && travel.isActive == true) {
					return (
						<Viaje
							key={i}
							User={tra[i]?.user.userName}
							Companions={travel.companions}
							Date={travel.travel_date}
							Expenses={ex[i]}
							onPress={() =>
								navigation.navigate("UnirseViaje", {
									name: tra[i],
									companions: travel.companions,
									expenses: ex[i],
									typeofExpenses: exName[i],
									extras: travel.id_extras,
									destination: names.location_name,
									id_travel: travel.id,
									id_user1: travel.id_user1,
								})
							}
						/>
					);
				} else {
					return null;
				}
			})}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FEFEFE",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
	},
	arrow: {
		marginTop: 60,
		marginLeft: -50,
	},
	row: {
		flexDirection: "row",
	},
	desc: {
		marginLeft: 30,
		alignSelf: "flex-start",
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
});
