import { View, Text, StyleSheet } from "react-native";

export default function Messages({
	user,
	Txt,
	date,
	align,
	backgroundColor,
	textcolor,
}) {
	return (
		<View style={[styles.view, { alignSelf: align, backgroundColor }]}>
			<Text style={[styles.username, { color: textcolor }]}>{user}</Text>
			<Text style={[styles.message, { color: textcolor }]}>{Txt}</Text>
			<Text style={[styles.datemessage, { color: textcolor }]}>{date}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		padding: 10,
		backgroundColor: "gray",
		color: "white",
		margin: 10,
		borderRadius: 20,
		width: "50%",
		marginBottom: 0,
	},
	username: {
		fontSize: 10,
		fontWeight: "bold",
	},
	message: {
		fontSize: 13.5,
	},
	datemessage: {
		position: "relative",
		marginTop: 10,
		fontSize: 10,
		alignSelf: "flex-end",
	},
});
