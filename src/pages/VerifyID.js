// App.js
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { CameraScreen } from "./CameraScreen";
import GeneralButton2 from "../components/GeneralComponents/GeneralButton2";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import GeneralText from "../components/GeneralComponents/GeneralText";
import supabase from "../config/initSupabase.js";

export default function App() {
	const [imageUri, setImageUri] = useState(null);
	const [openCamera, setOpenCamera] = useState(false);
	const { t } = useTranslation();
	const navigation = useNavigation();
	const [photoFile, setPhotoFile] = useState(null);

	const openCameraHandler = () => {
		setOpenCamera(true);
	};

	const handlePictureTaken = async (data) => {
		try {
			setImageUri(data.uri);
			setOpenCamera(false);
			// const base64Photo = data.base64Photo;
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
			const { error } = await supabase.storage
				.from("files")
				.upload(filePath, photo);
			if (error) {
				console.log(error);
			}
			const { data: supabaseURL, error: getURLErr } = supabase.storage
				.from("files")
				.getPublicUrl(filePath);
			if (getURLErr) {
				console.log(getURLErr);
			}
			setPhotoFile(supabaseURL.publicUrl);
		} catch (error) {
			console.log(error);
		}
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
			navigation.navigate("verifyID2", { image: photoFile });
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
							text="Toma una foto de tu cara"
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
