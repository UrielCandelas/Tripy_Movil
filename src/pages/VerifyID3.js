// App.js
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { CameraScreen } from "./CameraScreen";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import { useTranslation } from "react-i18next";
import { useRoute, useNavigation } from "@react-navigation/native";
import GeneralText from "../components/GeneralComponents/GeneralText";
import { useUser } from "../context/UsersContext";
import { useAuth } from "../context/AuthContext";

export default function App() {
	const { provUser } = useAuth();
	const { sendBlobData, sendIdentity } = useUser();
	const [imageUri, setImageUri] = useState(null);
	const [openCamera, setOpenCamera] = useState(false);
	const { t } = useTranslation();
	const route = useRoute();
	const data1 = route.params;
	const [loading, setLoading] = useState(false);
	const [photoFile, setPhotoFile] = useState(null);
	const navigation = useNavigation();

	const openCameraHandler = () => {
		setOpenCamera(true);
	};

	const handlePictureTaken = (data) => {
		setImageUri(data.uri);
		setOpenCamera(false);
		const uint8Array = data.uint8Array;
		const file = new File([uint8Array], "image2.jpg", { type: "image/jpeg" });
		setPhotoFile(file);
	};

	const handleCancel = () => {
		setOpenCamera(false);
	};

	const onPressHandler = async () => {
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
			try {
				const file1 = data1.image2;
				const file2 = photoFile;
				const file3 = data1.image1;
				const formData = new FormData();
				formData.append("image1", file1);
				formData.append("image2", file2);
				formData.append("image3", file3);
				formData.append("id", provUser.id);
				setLoading(true);
				await sendIdentity(formData);
				setLoading(false);
				navigation.navigate("waitingScreen");
			} catch (err) {
				console.log(err);
				Toast.show({
					type: "error",
					text1: t("ErrorM"),
					text2: t("Error en la validación de identidad"),
					visibilityTime: 3000,
					position: "bottom",
					bottomOffset: 50,
				});
			}
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
							text="Toma una foto de la parte trasera de tu identificación oficial"
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
							Txt="Enviar"
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
