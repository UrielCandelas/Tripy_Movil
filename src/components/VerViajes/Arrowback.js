import Svg, { Circle, Image } from "react-native-svg";

export default function Arrowback({ style, color, onPresshandler }) {
	return (
		<Svg height="50" width="50" onPress={onPresshandler} style={style}>
			<Circle cx="25" cy="25" r="20" fill={color} />

			<Image
				x="11"
				y="10"
				width="30"
				height="30"
				href={require("../../images/ArrowLeft.png")}
			/>
		</Svg>
	);
}

// cambie fill="#F2F2F2" para que acepte el color personalizado
