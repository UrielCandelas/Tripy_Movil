import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import GeneralText from "../components/GeneralComponents/GeneralText";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import AnimatedInput from "../components/AnimatedInput";
import Loading from "../components/Loading/Loading";

export default function VerifyOTP() {
	const {
		verifyOTPFunc,
		resendOTPFunc,
		provUser,
		errors: otpErrors,
	} = useAuth();

	const { t } = useTranslation();

	const [otp, setOTP] = useState("");

	const [loading, setLoading] = useState(false);
	
	const [status, setStatus] = useState(400);

	const navigation = useNavigation();

	const handleKeyboardDismiss = () => {
		Keyboard.dismiss();
	};

	const handleSubmit = async () => {
		if (otp == "" || otp == " ") {
			Toast.show({
				type: "error",
				text1: t("ErrorM"),
				text2: t("EMessage"),
				visibilityTime: 3000,
				position: "bottom",
				bottomOffset: 50,
			});
			return;
		}
		try {
			setLoading(true);
			const status = await verifyOTPFunc(otp);
			setLoading(false);
			if (status == 200) {
				navigation.navigate("verifyID");
			}
		} catch (error) {
			setLoading(false);
		}
	};

	// useEffect(() => {
	//   if (isAuthenticated) {
	//     // navigate('/main')
	//   }
	// }, [isAuthenticated])

	return (
		<View style={styles.centeredContainer}>
			<GeneralText
				text={t("VerOTP")}
				color="black"
				fontWeight="bold"
				marginTop={50}
				marginBottom={20}
				size={20}
			/>
			<TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
				<AnimatedInput
					label={t("TypeOTP")}
					duration={300}
					width={"70%"}
					height={60}
					onChange={setOTP}
					value={otp}
				/>
			</TouchableWithoutFeedback>
			<GeneralText
				text={t("ReOTP")}
				onPress={() => {
					resendOTPFunc(provUser?.email);
				}}
				color="black"
			/>
			<GeneralButton2
				Txt={t("BtnVerOTP")}
				style={{
					backgroundColor: "#64CCC5",
					marginTop: 50,
					width: "60%",
					height: "25%",
				}}
				color="white"
				onPress={handleSubmit}
			/>
			<Loading isLoading={loading} />
		</View>
	);
}

const styles = StyleSheet.create({
	centeredContainer: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	modalBackground: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	activityIndicatorWrapper: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 20,
	},
});
