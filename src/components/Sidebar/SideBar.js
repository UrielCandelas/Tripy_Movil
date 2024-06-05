import GeneralText from "../GeneralComponents/GeneralText";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useTravels } from "../../context/TravelsContext";
import { useAuth } from "../../context/AuthContext";
import React, { useEffect } from "react";

const Sidebar = ({
	userNav,
	HomeNav,
	RequestNav,
	TravelsNav,
	LogoutNav,
	userName,
	TravelsConsultNav,
	ChatNav,
}) => {
	const { t } = useTranslation();
	const { getTravelsActive } = useTravels();
	const { user } = useAuth();
	useEffect(() => {
		getTravelsActive(user.id);
	}, []);
	return (
		<View style={styles.sidebar}>
			<ScrollView>
				<TouchableOpacity
					onPress={userNav}
					style={[styles.section, styles.header]}
				>
					<>
						<GeneralText
							text={userName}
							style={styles.textHeader}
							fontWeight="bold"
						/>
						<Image
							source={{ uri: user ? user?.profileImg : "_" }}
							style={styles.roundImage}
							onPress={userNav}
						/>
					</>
				</TouchableOpacity>
				<TouchableOpacity onPress={HomeNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons name="home" size={20} style={styles.images} />
						<GeneralText text={t("SideBarHome")} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={TravelsConsultNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons name="map" size={20} style={styles.images} />
						<GeneralText text={t("SideBarTrips")} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={RequestNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons name="notifications" size={20} style={styles.images} />
						<GeneralText text={t("SideBarRequests")} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={TravelsNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons name="add-circle" size={20} style={styles.images} />
						<GeneralText text={t("SideBarNewTrip")} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ChatNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons name="chatbubbles" size={20} style={styles.images} />
						<GeneralText text={t("SideBarChat")} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={LogoutNav} style={styles.section}>
					<View style={styles.object}>
						<Ionicons
							name="log-out"
							size={20}
							color="red"
							style={styles.images}
						/>
						<GeneralText text={t("SideBarLogOut")} color={"red"} />
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	sidebar: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fefefe",
		padding: 20,
		paddingTop: 50,
		width: "70%",
		position: "absolute",
		zIndex: 1,
		height: 1200,
	},
	section: {
		marginBottom: 20,
		marginTop: 20,
	},
	header: {
		marginBottom: "8%",
		alignItems: "center",
	},
	object: {
		flexDirection: "row",
		marginTop: "9%",
	},
	images: {
		marginRight: 10,
	},
	roundImage: {
		width: 70,
		height: 70,
		borderRadius: 35,
		alignSelf: "center",
		marginTop: "10%",
	},
});

export default Sidebar;
