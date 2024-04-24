import React, { useMemo, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import GeneralLittleTxt from "./GeneralComponents/GeneralLittleTxt";
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
export default function Boxes() {
	const navigation = useNavigation();
	const { locations, getLocations } = useLocations();
	useEffect(() => {
		getLocations();
	}, []);
	const loc = useMemo(() => locations?.locations, [locations]);
	const img = useMemo(() => locations?.images, [locations]);

	return (
		<View style={styles.container}>
			{loc?.length > 0 ? (
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
