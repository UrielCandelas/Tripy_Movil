import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View, Image } from "react-native";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/VerViajes/UpdateViaje";
import Arrowback from "../components/VerViajes/Arrowback";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading/Loading";

export default function EditarMyViajes() {
	const navigation = useNavigation();
	const { getTravelsActive, travelsActive, deleteSomeTravel } = useTravels();
	const { user } = useAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		getTravelsActive(user.id);
		setLoading(false);
	}, []);

	const travels = travelsActive.travels;
	const sharedTravels = travelsActive.sharedTravels;
	const usersU2 = travelsActive.usersU2;
	const locations_user1 = travelsActive.locations_user1;
	const expenses_user1 = travelsActive.expenses_user1;
	// const extras_user1 = travelsActive.extras_user1;
	const locations_user2 = travelsActive.locations_user2;
	const expenses_user2 = travelsActive.expenses_user2;
	// const extras_user2 = travelsActive.extras_user2;

	const killSomeTravel = async (id) => {
		try {
			Alert.alert(
				t("DeleteTrip"),
				t("Question2"),
				[
					{
						text: t("Cancel"),
						style: "cancel",
					},
					{
						text: t("Confirm"),
						onPress: async () => {
							await deleteSomeTravel(id);
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
	const { t } = useTranslation();
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.header}>
				<Arrowback
					style={styles.arrow}
					onPresshandler={() => navigation.goBack()}
					color="#F2F2F2"
				/>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={user.name}
					marginTop={60}
					marginLeft={80}
					marginRight={"28%"}
				/>
			</View>
			<Image
				source={{ uri: user.profileImg }}
				style={styles.roundImage}
				onPress={() => navigation.goBack()}
			/>
			<View>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={t("MyTrips")}
					marginTop={10}
					marginBottom={20}
				/>
				{travels?.map((travel, i) => {
					if (travel.id_user2 != null) {
						return (
							<Viaje
								key={i}
								companions={travel.companions}
								date={travel.travel_date}
								expenses={expenses_user1[i].expenses[1].quantity}
								location={locations_user1[i].location_name}
								OnPress={() => console.log("press")}
								killTravel={() => killSomeTravel(travel.id)}
								isOwner={true}
							/>
						);
					}
					return null;
				})}
			</View>
			<View>
				<GeneralText
					color="#1D1E20"
					size={17}
					height={18}
					text={t("ShareTrips")}
					marginTop={10}
					marginBottom={20}
				/>
				{sharedTravels?.map((travel, i) => (
					<Viaje
						key={i}
						companions={travel.companions}
						date={travel.travel_date}
						expenses={expenses_user2[i].quantity}
						location={locations_user2[i].location_name}
						onPress={() =>
							navigation.navigate("PerfilUsuario", {
								name: usersU2[i].name,
								id: usersU2[i].id,
							})
						}
						isOwner={false}
					/>
				))}
			</View>
			{loading ? <Loading loading={loading} /> : null}
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
		alignItems: "center",
	},
	arrow: {
		marginTop: 60,
		marginLeft: -12,
	},
	roundImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		alignSelf: "center",
	},
});
