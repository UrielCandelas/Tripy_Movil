import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CommentsUsersCard({
	email,
	userName,
	comentario,
	onPress,
}) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.userName}>{userName}</Text>
			<Text style={styles.email}>{email}</Text>
			<Text style={styles.comentario}>{comentario}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
	},
	userName: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 5,
	},
	email: {
		fontSize: 14,
		color: "#888888",
		marginBottom: 5,
	},
	comentario: {
		fontSize: 14,
	},
});
