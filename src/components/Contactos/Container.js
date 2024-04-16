import Svg, { Circle, Image } from "react-native-svg";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function Container({
	text,
	txtTrip,
	txtMessage,
	onPresshandler,
}) {
	return (
		<TouchableOpacity style={styles.view} onPress={onPresshandler}>
			<Svg style={styles.circle} height="80" width="80">
				<Circle cx="40" cy="40" r="30" fill="#F2F2F2" />
				<Image
					x="15"
					y="15"
					width="50"
					height="50"
					href={require("../../images/Default_pfp.png")}
				/>
			</Svg>
			<View style={styles.textcontainer}>
				<View style={styles.userinfo}>
					<Text style={styles.text}>{text}</Text>
				</View>
				<View style={styles.messages}>
					<Text style={styles.txtMessage}>{txtMessage}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	view: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "transparent",
		width: "100%",
		height: 80,
		borderTopWidth: 2,
		borderTopColor: "#E8E8E8",
	},
	messages: {
		display: "flex",
		flexDirection: "row",
	},
	image: {
		width: 12,
		height: 12,
		marginLeft: 20,
		marginTop: 5,
		marginBottom: 20,
	},
	textcontainer: {
		display: "flex",
		flexDirection: "column",
	},
	userinfo: {
		display: "flex",
		flexDirection: "row",
	},
	text: {
		color: "black",
		fontSize: 20,
		marginTop: 10,
	},
	infoviaje: {
		textAlign: "center",
		color: "white",
		backgroundColor: "#176B87",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingTop: 2,
		marginTop: 15,
		fontSize: 10,
		height: 20,
		marginLeft: 10,
	},
	txtMessage: {
		display: "flex",
		flexDirection: "column",
		fontSize: 15,
		color: "black",
	},
});
