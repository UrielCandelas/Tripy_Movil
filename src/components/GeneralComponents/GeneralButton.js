import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function GeneralButton({
	onPressHandler,
	colorText,
	colorBg,
	text,
	padding,
	width,
	height,
	marginTop,
	marginBottom,
}) {
	const styles = StyleSheet.create({
		view: {
			backgroundColor: colorBg,
			alignItems: "center",
			justifyContent: "center",
			padding,
			width,
			height,
			marginTop,
			marginBottom,
		},
		text: {
			color: colorText,
			fontSize: 17,
		},
	});

	return (
		<TouchableOpacity onPress={onPressHandler} style={styles.view}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
