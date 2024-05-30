import React, { useMemo, useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from "react-native";
import GeneralLittleTxt from "./GeneralComponents/GeneralLittleTxt";
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import Loading from "../components/Loading/Loading";

export default function Boxes() {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const { locations, getLocations, locationName } = useLocations();
	const [location, setLocation] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		async function fetchLocations() {
			setLoading(true);
			await getLocations();
			setLoading(false);
		}

		fetchLocations();
	}, []);
	useEffect(() => {
		if (locationName != null && locationName != "") {
			for (let i = 0; i < loc.length; i++) {
				if (
					loc[i]?.location_name
						.toLowerCase()
						?.includes(locationName.toLowerCase())
				) {
					setLocation(loc[i]);
					setImage(img[i].image);
					return;
				}
			}
			setLocation("NOOBJECT");
		} else if (locationName == "") {
			setLocation(null);
		}
	}, [locationName]);

	const loc = useMemo(() => locations?.locations, [locations]);
	const img = useMemo(() => locations?.images, [locations]);

	if (loading) {
		return <Loading isLoading={loading} />;
	}

	return (
		<View style={styles.container}>
			{location ? (
				location != "NOOBJECT" ? (
					<View style={styles.box}>
						<TouchableOpacity
							className="travelCard"
							nombDestino={location.location_name}
							onPress={() => {
								navigation.navigate("Destino", {
									id: location?.id,
								});
							}}
						>
							<Image source={{ uri: image }} style={styles.inner} />
						</TouchableOpacity>
						<GeneralLittleTxt Txt={location?.location_name} />
					</View>
				) : (
					<h3>No hay locaciones con ese nombre</h3>
				)
			) : loc?.length > 0 ? (
				loc ? (
					loc?.map((location, i) => (
						<View style={styles.box} key={i}>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("Destino", {
										id: location?.id,
										location: loc[i],
									});
								}}
							>
								<Image
									source={{ uri: img ? img[i].image : "" }}
									style={styles.inner}
								/>
							</TouchableOpacity>
							<GeneralLittleTxt Txt={location?.location_name} />
						</View>
					))
				) : (
					<Text>CARGANDO...</Text>
				)
			) : (
				<Text>No hay nada registrado</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	box: {
		width: "50%",
		padding: 10,
	},
	inner: {
		flex: 1,
		backgroundColor: "#E7E8EA",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		height: 250, // Altura máxima por caja
	},
	text: {
		color: "black",
	},
});
