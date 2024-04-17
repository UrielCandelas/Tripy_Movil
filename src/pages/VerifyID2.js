// App.js
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { CameraScreen } from "./CameraScreen";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import { useTranslation } from "react-i18next";
import { useNavigation, useRoute } from "@react-navigation/native";
import GeneralText from "../components/GeneralComponents/GeneralText";

export default function App() {
	const [imageUri, setImageUri] = useState(null);
	const [openCamera, setOpenCamera] = useState(false);
	const { t } = useTranslation();
	const navigation = useNavigation();
	const [photoFile, setPhotoFile] = useState(null);
	const route = useRoute();
	const data1 = route.params;

	const openCameraHandler = () => {
		setOpenCamera(true);
	};

	const handlePictureTaken = (data) => {
		setImageUri(data.uri);
		setOpenCamera(false);
		const image2 = new File([data.blob], "photo2.jpg", { type: "image/jpeg" });
		setPhotoFile(image2);
	};

	const handleCancel = () => {
		setOpenCamera(false);
	};

	const onPressHandler = () => {
		if (!imageUri) {
			Toast.show({
				type: "error",
				text1: t("ErrorM"),
				text2: t("Agrega una Imagen"),
				visibilityTime: 3000,
				position: "bottom",
				bottomOffset: 50,
			});
		} else {
			navigation.navigate("verifyID3", {
				image1: data1.image,
				image2: photoFile,
			});
		}
	};

	return (
		<View style={styles.container}>
			{openCamera ? (
				<CameraScreen
					onPictureTaken={handlePictureTaken}
					onCancel={handleCancel}
				/>
			) : (
				<View style={styles.container2}>
					<View style={styles.header}>
						<GeneralText text="Verifica tu identidad" color="black" size={20} />
						<GeneralText
							text="Toma una foto de una identificación oficial"
							color="black"
							marginTop={10}
							size={15}
						/>
					</View>
					{imageUri && (
						<Image source={{ uri: imageUri }} style={styles.image} />
					)}
					<View style={styles.btnContainer}>
						<GeneralButton2
							style={styles.btnStyle}
							Txt="Abrir Cámara"
							onPress={openCameraHandler}
							color="white"
						/>
						<GeneralButton2
							Txt="Siguiente"
							onPress={onPressHandler}
							style={styles.btnNext}
							color="white"
						/>
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	container2: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		alignItems: "center",
		marginBottom: "auto",
		marginTop: "20%",
	},
	btnContainer: {
		marginTop: "auto",
		marginBottom: 70,
	},
	image: {
		width: 300,
		height: 400,
		marginTop: 20,
	},
	btnStyle: {
		marginBottom: 40,
	},
	btnNext: {
		height: 50,
	},
});
