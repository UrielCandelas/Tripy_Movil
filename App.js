import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { I18nextProvider } from "react-i18next";
import i18next from "./src/languages/i18n.js";

import VerifyOTP from "./src/pages/VerifyOTP";
import VerifyID from "./src/pages/VerifyID";
import VerViajes1 from "./src/pages/VerViajes1";
import VerViajes2 from "./src/pages/VerViajes2";
import VerMiViaje from "./src/pages/VerMiViaje";
import Gastos from "./src/pages/Gastos";
import VerViajes3 from "./src/pages/VerViajes3";
import Destino from "./src/pages/Destino";
import Home from "./src/pages/Home.js";
import Inicio from "./src/pages/Inicio.js";
import CreateAccount from "./src/pages/CreateAccount.js";
import CreateAccount2 from "./src/pages/CreateAccount2.js";
import LandPage from "./src/pages/LandPage.js";
import MiPerfil from "./src/pages/MiPerfil";
import Perfil from "./src/pages/Perfil";
import AddReview from "./src/pages/AddReview";
import EditarPerfil from "./src/pages/EditarPerfil";
import CrearViaje from "./src/pages/CrearViaje";
import Solicitudes from "./src/pages/Solicitudes";
import AgendarGastos from "./src/pages/AgregarGastos";
import EditarMyViajes from "./src/pages/EditarMyViajes";
import Chat from "./src/pages/Chat";
import Contactos from "./src/pages/Contactos";
import Toast from "react-native-toast-message";
import LoadingScreen from "./src/pages/LoadingScreen";
import LoadingScreen2 from "./src/pages/LoadingScreen2";
import LoadingScreen3 from "./src/pages/LoadingScreen3";
import VerifyID2 from "./src/pages/VerifyID2";
import VerifyID3 from "./src/pages/VerifyID3";
import WaitingScreen from "./src/pages/WaitingScreen";

import AuthProvider from "./src/context/AuthContext.js";
import LocationProvider from "./src/context/LocationContext.js";
import TravelProvider from "./src/context/TravelsContext.js";
import UserProvider from "./src/context/UsersContext.js";

export default function App() {
	const Stack = createNativeStackNavigator();
	StatusBar.setBackgroundColor("#64CCC5");
	return (
		<I18nextProvider i18n={i18next}>
			<AuthProvider>
				<LocationProvider>
					<TravelProvider>
						<UserProvider>
							<NavigationContainer>
								<Stack.Navigator initialRouteName="Bienvenido">
									<Stack.Screen
										name="Bienvenido"
										component={Home}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="verifyOTP"
										component={VerifyOTP}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="verifyID"
										component={VerifyID}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="verifyID2"
										component={VerifyID2}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="verifyID3"
										component={VerifyID3}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="waitingScreen"
										component={WaitingScreen}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="AgendarGastos"
										component={AgendarGastos}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="LandPage"
										options={{ headerShown: false }}
										component={LandPage}
									/>
									<Stack.Screen
										name="Inicio"
										component={Inicio}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="PerfilUsuario"
										component={Perfil}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="MiPerfil"
										component={MiPerfil}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="CreateAccount"
										component={CreateAccount}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="EditarMyViajes"
										component={EditarMyViajes}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="CreateAccount2"
										component={CreateAccount2}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="UnirseViaje"
										component={VerViajes3}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="VerViajesExis"
										component={VerMiViaje}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="Destino"
										component={Destino}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="Gastos"
										component={Gastos}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="VerViajes1"
										component={VerViajes1}
										x
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="VerViajes2"
										component={VerViajes2}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="EditarPerfil"
										component={EditarPerfil}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="AñadirReseña"
										component={AddReview}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="CrearViaje"
										component={CrearViaje}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="Contactos"
										component={Contactos}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="Chat"
										component={Chat}
										options={{ headerShown: false }}
									/>

									<Stack.Screen
										name="Solicitudes"
										component={Solicitudes}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="LoadingScreen2"
										component={LoadingScreen2}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="LoadingScreen"
										component={LoadingScreen}
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="LoadingScreen3"
										component={LoadingScreen3}
										options={{ headerShown: false }}
									/>
								</Stack.Navigator>
							</NavigationContainer>
							<Toast />
						</UserProvider>
					</TravelProvider>
				</LocationProvider>
			</AuthProvider>
		</I18nextProvider>
	);
}
