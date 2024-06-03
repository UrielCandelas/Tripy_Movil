import React, { useEffect, useMemo, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/Destino/Viaje";
import Cuadritos from "../components/Destino/Cuadritos";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useTravels } from "../context/TravelsContext";
import ComentsUsersCards from "../components/Destino/Card.js";
import Loading from "../components/Loading/Loading.js";

export default function VerViajes1() {
	const navigation = useNavigation();
	const route = useRoute();
	const { id, location } = route.params;

	const { getTravelsImg2, travels } = useLocations();
	const { registerComent } = useTravels();

	const { user } = useAuth();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTravelsImg2Func(id);
	}, []);

	const getTravelsImg2Func = async (id) => {
		setLoading(true);
		await getTravelsImg2(id);
		setLoading(false);
	};

	const tra = useMemo(() => travels?.travelCards, [travels]);
	const img = useMemo(() => travels?.image, [travels]);
	const comentsComp = useMemo(() => travels?.comentarios, [travels]);

	const names = [];
	const ex = [];
	const exName = [];

	const myId = user.id;
	const { t } = useTranslation();

	const [comentario, setExtra] = useState("");
	const handleSubmit = async () => {
		const obj = {
			uComent: comentario,
			idUser: user?.id,
			idLocation: location?.id,
		};
		registerComent(obj);
	};

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
					uri2={img?.image}
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
					text={location?.description}
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
					text={location?.location}
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
					text={location?.schedule}
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
			<GeneralText
				color="#1D1E20"
				size={17}
				height={18}
				text={t("Ingresar comentario:")}
				marginTop={20}
			/>
			<View style={styles.container1}>
				<TextInput
					style={styles.input1}
					value={comentario}
					onChangeText={setExtra}
				/>
			</View>
			<TouchableOpacity
				style={{
					backgroundColor: "#64CCC5",
					width: "100%",
					justifyContent: "center",
					height: 75,
					marginTop: 40,
					position: "relative",
					bottom: 0,
					alignItems: "center",
				}}
				onPress={handleSubmit}
			>
				<Text style={styles.texto2}>{t("Comentar")}</Text>
			</TouchableOpacity>
			<GeneralText
				color="#1D1E20"
				size={17}
				height={18}
				text={t("Comentarios")}
				marginTop={20}
			/>
			{comentsComp?.map((card, i) => {
				if (comentsComp) {
					return (
						<ComentsUsersCards
							key={i}
							userName={card?.name}
							comentario={card?.comentario}
							className="divComentsCardsUsers"
							onPress={() => {
								if (card?.id == user?.id) {
									console.log("aaaaaaaaaaa");
									return navigation.navigate("Perfil");
								} else {
									console.log("aaaaaa");
									navigation.navigate("MiPerfil");
								}
							}}
						/>
					);
				} else {
					console.log("no hay");
					return null;
				}
			})}
			{loading ? <Loading isLoading={loading} /> : null}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container1: {
		paddingTop: "2%",
		width: "100%",
	},
	input1: {
		marginLeft: 16,
		marginRight: 16,
		height: 50,
		borderColor: "#8F959E",
		borderWidth: 0.5,
		borderRadius: 10,
		paddingHorizontal: 10,
		fontSize: 16,
	},
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
	texto2: {
		fontSize: 20,
		fontWeight: "bold",
		alignSelf: "center",
		top: 0,
		left: 0,
		padding: 16,
	},
});
