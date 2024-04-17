import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GeneralText from "../GeneralComponents/GeneralText";
import { View } from "react-native-animatable";

export default function Viaje({ onPress, User, Expenses, Date, Companions }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.view}>
			<GeneralText
				text={User}
				color="#fff"
				fontWeight={"bold"}
				size={13}
				width_={268}
				paddingLeft={16}
				paddingRight={20}
				paddingTop={20}
			/>
			<GeneralText
				text={`Gastos a compartir: $${Expenses}`}
				color="#fff"
				size={12}
				width_={268}
				paddingLeft={16}
				paddingRight={20}
				paddingTop={10}
			/>
			<View style={styles.innerView}>
				<Ionicons name="person" size={12} color="#fff" style={styles.image} />
				<GeneralText
					text={`Personas admitidas en el viaje: ${Companions}`}
					color="#fff"
					size={12}
					width_={268}
					marginBottom={14}
					marginLeft={5}
				/>
			</View>
			<GeneralText
				text={`Fecha: ${Date}`}
				color="#fff"
				size={12}
				width_={268}
				paddingLeft={16}
				paddingRight={20}
				paddingBottom={20}
				marginTop={-14}
			/>
		</TouchableOpacity>
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
		marginLeft: 16,
		marginTop: 5,
		marginBottom: 20,
	},
	innerView: {
		flexDirection: "row", // Alinea los elementos horizontalmente
		alignItems: "center", // Centra verticalmente los elementos
	},
});
