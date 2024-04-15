import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import GeneralText from "../components/GeneralComponents/GeneralText";
import { useTranslation } from "react-i18next";
function LoadingScreen(props) {
	// Remove 'const' from the following line
	const animation = React.useRef(null);
	const [loop, setLoop] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoop(false), 4000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	const { t } = useTranslation();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={{ width: "50%", height: "50%", alignItems: "center" }}>
				<LottieView
					autoPlay
					loop={loop}
					ref={animation}
					onAnimationFinish={() => navigation.navigate("LandPage")}
					style={{
						width: 400,
						height: "100%",
						backgroundColor: "transparent",
					}}
					source={require("../images/animations/loading.json")}
				/>
			</View>
			<GeneralText
				text={t("Loading")}
				size={40}
				color="#176B87"
				fontWeight={"bold"}
			/>
		</View>
	);
}

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
