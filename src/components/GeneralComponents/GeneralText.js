import { StyleSheet, Text } from "react-native";

export default function GeneralText({
	text,
	size,
	color,
	height,
	width_,
	height_,
	padding_,
	paddingLeft,
	paddingRight,
	paddingBottom,
	paddingTop,
	marginTop,
	marginRight,
	marginLeft,
	marginBottom,
	fontWeight,
	onPress,
	alignText,
	alignSelf,
}) {
	const styles = StyleSheet.create({
		text: {
			color,
			fontSize: size,
			lineHeight: height,
			width: width_,
			height: height_,
			padding: padding_,
			paddingLeft,
			paddingRight,
			paddingBottom,
			paddingTop,
			marginTop,
			marginRight,
			marginLeft,
			marginBottom,
			fontWeight,
			textAlign: alignText,
			alignSelf: alignSelf,
		},
	});
	return (
		<Text style={styles.text} onPress={onPress}>
			{text}
		</Text>
	);
}
