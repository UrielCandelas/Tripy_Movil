import { StyleSheet } from "react-native";
import Svg, { Circle, Image } from "react-native-svg";

export default function SendButton({ style, filcolor, onPresshandler }) {
	return (
		<Svg style={styles.circle} height="50" width="50" onPress={onPresshandler}>
			<Circle cx="25" cy="25" r="20" fill={filcolor} />
			<Image
				x="12"
				y="10"
				width="30"
				height="30"
				href={require("../../images/sendbutton.png")}
			/>
		</Svg>
	);
}
const styles = StyleSheet.create({
	circle: {
		padding: 10,
		right: 10,
		margin: 10,
		position: "absolute",
	},
});
