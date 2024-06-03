import { View, StyleSheet, ScrollView, Text } from "react-native";
import Container from "../Contactos/Container";
import { useNavigation } from "@react-navigation/native";

export default function ContactsContainer({ contacts, socket }) {
	const navigation = useNavigation();
	return (
		<View>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
			>
				{(contacts?.length > 0 &&
					contacts?.map((contact, i) => (
						<Container
							text={contact.name}
							key={i}
							onPresshandler={() => {
								navigation.navigate("Chat", {
									currentChat: contact,
									// socket,
								});
							}}
						/>
					))) || (
					<Text style={styles.textNoContacts}>
						No hay contactos disponibles
					</Text>
				)}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: "#FEFEFE",
		alignItems: "center",
		paddingTop: 120,
	},
	textNoContacts: {
		fontSize: 20,
		marginTop: 40,
	},
});
