import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import DatePicker from "react-native-date-picker";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import GeneralButton from "../components/GeneralComponents/GeneralButton";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Alert,
	Modal,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function CrearViaje() {
	const navigation = useNavigation();
	const today = new Date();
	const startdate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		"YYYY-MM-DD",
	);
	const { locations, getLocations } = useLocations();
	const { user } = useAuth();
	const { registerNewTravelFunc, transports, getTransports } = useTravels();

	const id_user1 = user.id;
	useEffect(() => {
		getLocations();
		getTransports();
	}, []);

	const data = [];
	locations.map((location, i) => {
		return data.push({ label: location.location_name, value: location.id });
	});
	const data2 = [];
	transports.map((transports, i) => {
		if (transports.id == 5) {
			return null;
		}
		return data2.push({ label: transports.transport, value: transports.id });
	});

	const handleTextChange = (text, state) => {
		const formattedText = text.replace(/[ ,\-.]/g, "");
		state(formattedText);
	};
	const [value, setValue] = useState(null);
	const [quantity, setQuantity] = useState("");
	const [companions, setCompanions] = useState("");
	const [extra, setExtra] = useState("");
	const [travel_date, setTravel_date] = useState(startdate);
	const [typeOfExpenses, setTypeOfExpenses] = useState("");
	const [typeTransportation, setTypeTransportation] = useState(null);
	const [open, setOpen] = useState(false);

	const handleSubmit = async () => {
		try {
			const newTravel = {
				id_user1,
				id_location: value.value,
				travel_date,
				id_transportation: typeTransportation ? typeTransportation.value : 5,
				expense: typeOfExpenses,
				quantity: parseInt(quantity),
				extra,
				companions: parseInt(companions),
			};
			Alert.alert(
				t("SideBarNewTrip"),
				t("AlertQuestion"),
				[
					{
						text: t("Cancel"),
						style: "cancel",
					},
					{
						text: t("Confirm"),
						onPress: async () => {
							await registerNewTravelFunc(newTravel);
							// ANTES DEL LOADING SCREEN: navigation.navigate("LandPage");
							navigation.navigate("LoadingScreen");
						},
					},
				],
				{ cancelable: false },
			);
			// console.log(newTravel)
		} catch (error) {
			Alert.alert(t("AlertError") + error);
			console.log(error);
		}
	};

	/* const onChangeDate = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp
      ? new Date(selectedDate.nativeEvent.timestamp)
      : new Date();
    setShowDatePicker(Platform.OS === "ios");
    setTravel_date(currentDate);
  }; */

	const handleDateChange = (date) => {
		setTravel_date(date);
	};

	const handleOpen = () => {
		setOpen(!open);
	};
	const { t } = useTranslation();
	return (
		<View style={styles.container}>
			<StatusBar style="auto" backgroundColor="#64CCC5" />
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Ionicons
					style={styles.back}
					name="arrow-back"
					size={24}
					color="black"
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.texto1}>{t("SideBarNewTrip")}</Text>

				<View>
					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("Destination")}</Text>
						<SafeAreaView>
							<Dropdown
								style={styles.dropdown}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								data={data}
								search
								maxHeight={300}
								labelField="label"
								valueField="value"
								placeholder={t("DestinationPlaceholder")}
								searchPlaceholder="Buscar"
								value={value}
								onChange={setValue}
							/>
						</SafeAreaView>
					</View>

					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("TotalCost")}</Text>
						<SafeAreaView>
							<TextInput
								style={styles.input}
								value={quantity}
								onChangeText={(text) => handleTextChange(text, setQuantity)}
								keyboardType="numeric"
								maxLength={6}
							/>
						</SafeAreaView>
					</View>

					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("InitialDate")}</Text>
						<SafeAreaView>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Ionicons
									style={{ marginLeft: 20 }}
									name="calendar-sharp"
									size={24}
									color="black"
									onPress={handleOpen}
								/>
								<GeneralButton
									text={travel_date}
									onPressHandler={handleOpen}
									width={120}
									height={40}
								/>
							</View>

							<Modal animationType="slide" transparent={true} visible={open}>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<DatePicker
											mode="calendar"
											minimumDate={startdate}
											selected={travel_date}
											onDateChange={handleDateChange}
										/>
										<GeneralButton
											text={"Cerrar"}
											onPressHandler={handleOpen}
										/>
									</View>
								</View>
							</Modal>
						</SafeAreaView>
					</View>

					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("Spent")}</Text>

						<View style={styles.radioButtonContainer}>
							<RadioButton.Group
								onValueChange={setTypeOfExpenses}
								value={typeOfExpenses}
							>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<RadioButton value="Transporte" color="#001C30" />
									<Text>{t("Transport")}</Text>
								</View>

								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<RadioButton value="Estancia" color="#001C30" />
									<Text>{t("Stay")}</Text>
								</View>
							</RadioButton.Group>
							{typeOfExpenses === "Transporte" ? (
								<View>
									<Dropdown
										style={[styles.dropdown, { minWidth: 240 }]}
										placeholderStyle={styles.placeholderStyle}
										selectedTextStyle={styles.selectedTextStyle}
										inputSearchStyle={styles.inputSearchStyle}
										data={data2}
										search
										maxHeight={300}
										labelField="label"
										valueField="value"
										placeholder="Selecciona un transporte"
										searchPlaceholder="Buscar"
										value={typeTransportation}
										onChange={setTypeTransportation}
									/>
								</View>
							) : (
								<></>
							)}
						</View>
					</View>
					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("UserNumber")}</Text>
						<SafeAreaView>
							<TextInput
								style={styles.input}
								keyboardType="numeric"
								value={companions}
								onChangeText={(text) => handleTextChange(text, setCompanions)}
								maxLength={1}
							/>
						</SafeAreaView>
					</View>

					<View style={styles.container1}>
						<Text style={styles.texto5}>{t("XRequests")}</Text>
						<TextInput
							style={styles.input1}
							value={extra}
							onChangeText={setExtra}
						/>
					</View>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: "#64CCC5",
						width: "100%",
						justifyContent: "center",
						height: 75,
						marginTop: 40,
						position: "relative",
						bottom: 0,
						alignItems: "center",
					}}
					onPress={handleSubmit}
				>
					<Text style={styles.texto6}>{t("SideBarNewTrip")}</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	container1: {
		paddingTop: "2%",
	},

	back: {
		position: "absolute",
		top: 0,
		left: 0,
		padding: 16,
		paddingTop: "15%",
	},

	texto1: {
		fontSize: 20,
		fontWeight: "bold",
		alignSelf: "center",
		top: 0,
		left: 0,
		padding: 16,
		paddingTop: "20%",
	},

	texto5: {
		fontSize: 17,
		top: 0,
		left: 0,
		padding: 16,
	},

	texto6: {
		color: "white",
		fontWeight: "bold",
		fontSize: 17,
	},

	dropdown: {
		marginLeft: 16,
		marginRight: 16,
		height: 50,
		borderColor: "#8F959E",
		borderWidth: 0.5,
		borderRadius: 10,
		paddingHorizontal: 10,
	},

	placeholderStyle: {
		fontSize: 16,
		color: "#8F959E",
	},

	selectedTextStyle: {
		fontSize: 16,
	},

	iconStyle: {
		width: 20,
		height: 20,
	},

	inputSearchStyle: {
		height: 40,
		fontSize: 16,
		borderRadius: 10,
		position: "relative",
	},

	input: {
		marginLeft: 16,
		height: 50,
		borderColor: "#8F959E",
		borderWidth: 0.5,
		borderRadius: 10,
		paddingHorizontal: 10,
		fontSize: 16,
		width: 200,
	},

	radioButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 16, // Padding específico para los radio buttons
	},

	input1: {
		marginLeft: 16,
		marginRight: 16,
		height: 50,
		borderColor: "#8F959E",
		borderWidth: 0.5,
		borderRadius: 10,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		width: "90%",
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
