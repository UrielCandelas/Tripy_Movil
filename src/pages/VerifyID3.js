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
import supabase from "../config/initSupabase.js";

export default function App() {
	const { provUser } = useAuth();
	const { sendBlobData } = useUser();
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

	const handlePictureTaken = async (data) => {
		try {
			setImageUri(data.uri);
			setOpenCamera(false);
			const timestamp = new Date().getTime();
			const uri = data.uri;
			const formData = new FormData();
			const fileName = uri.substring(uri.lastIndexOf("/") + 1);
			const uniqueFileName = `${timestamp}-${fileName}`;
			const filePath = `${uniqueFileName}`;
			const photo = {
				uri,
				name: fileName,
				type: "image/jpeg",
			};
			formData.append("file", photo);
			setLoading(true);
			const { error } = await supabase.storage
				.from("files")
				.upload(filePath, photo);
			if (error) {
				setLoading(false);
				return console.log(error);
			}

			const { data: supabaseURL, error: getURLErr } = supabase.storage
				.from("files")
				.getPublicUrl(filePath);
			if (getURLErr) {
				setLoading(false);
				return console.log(getURLErr);
			}
			setPhotoFile(supabaseURL.publicUrl);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
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
				const dataToSend = {
					file1,
					file2,
					file3,
					id: provUser.id,
				};
				setLoading(true);
				await sendBlobData(dataToSend);
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
			) : loading ? (
				<GeneralText text="Cargando..." color="black" size={20} />
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
