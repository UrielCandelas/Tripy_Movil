import { TouchableOpacity, StyleSheet, Image, View } from "react-native";

import GeneralText from "../GeneralComponents/GeneralText";

export default function Viaje({
	location,
	companions,
	date,
	expenses,
	isActive,
	onPress,
}) {
	return (
		<View>
			<TouchableOpacity style={styles.view} onPress={onPress}>
				<GeneralText
					text={"Gastos a compartir"}
					color="#fff"
					size={12}
					width_={268}
					paddingLeft={20}
					paddingRight={20}
					paddingTop={20}
				/>
				<GeneralText
					text={location}
					color="#fff"
					size={12}
					width_={268}
					paddingLeft={20}
					paddingRight={20}
					paddingTop={10}
				/>
				<View style={styles.imageContainer}>
					<Image
						source={require("../../images/userIcon.png")}
						style={styles.image}
					/>
					<GeneralText
						text={companions}
						color="#fff"
						size={12}
						paddingLeft={5}
						paddingRight={20}
						marginTop={-15}
					/>
				</View>
				<GeneralText
					text={date}
					color="#fff"
					size={12}
					width_={268}
					paddingLeft={20}
					paddingRight={20}
					paddingBottom={20}
					marginTop={-15}
				/>
				<GeneralText
					text={`$${expenses}`}
					color="#fff"
					size={12}
					width_={268}
					padding_={20}
					marginTop={-30}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#001C30",
		borderRadius: 10,
		height: "auto",
		width: 334,
		flexShrink: 0,
		paddingLeft: 30,
		marginBottom: 20,
	},
	image: {
		width: 12,
		height: 12,
		marginLeft: 20,
		marginTop: 5,
		marginBottom: 20,
	},
	imageContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
		marginTop: 5,
	},
});
