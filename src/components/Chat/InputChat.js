import { View, TextInput, StyleSheet } from "react-native";

export default function InputChat({
	placeholder,
	flexDirection,
	justifyContent,
	style,
	onChangeText,
	value,
}) {
	return (
		<View
			style={styles.container}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
		>
			<TextInput
				style={[styles.input, style]}
				placeholder={placeholder}
				onChangeText={onChangeText}
				placeholderTextColor="gray"
				value={value}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	input: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		backgroundColor: "#FEFEFE",
		width: "100%",
		paddingRight: 50,
	},
});
