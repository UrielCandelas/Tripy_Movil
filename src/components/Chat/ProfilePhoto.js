import { StyleSheet } from "react-native";
import Svg, { Circle, Image } from "react-native-svg";

export default function Arrowback({ style, color, onPresshandler }) {
	return (
		<Svg style={styles.circle} height="50" width="50" onPress={onPresshandler}>
			<Circle cx="25" cy="25" r="20" fill={color} />
			<Image
				x="10"
				y="10"
				width="30"
				height="30"
				href={require("../../images/Default_pfp.png")}
			/>
		</Svg>
	);
}
const styles = StyleSheet.create({
	circle: {
		padding: 10,
		color: "white",
		margin: 10,
		marginTop: 50,
		width: "50%",
		marginBottom: 0,
	},
});
