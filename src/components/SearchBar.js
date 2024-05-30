import { View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocations } from "../context/LocationContext";

export default function SearchBar() {
	const { t } = useTranslation();
	const [search, setSearch] = useState("");
	const { getLocationsPerName } = useLocations();

	const handleInputChange = (search) => {
		setSearch(search);
	};

	const handleSubmit = (e) => {
		getLocationsPerName(search);
	};

	useEffect(() => {
		handleSubmit(search);
	}, [search]);

	return (
		<View
			style={{ marginTop: -60, marginBottom: 40, margin: 15, width: "90%" }}
		>
			<View
				style={{
					padding: 10,
					flexDirection: "row",
					width: "95%",
					backgroundColor: "#d9dbda",
					borderRadius: 10,
					alignItems: "center",
				}}
			>
				<TextInput
					value={search}
					onChangeText={handleInputChange}
					style={{ fontSize: 15 }}
					placeholder={t("SearchBar")}
				/>
			</View>
		</View>
	);
}
// const styles = StyleSheet.create({});
