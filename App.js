import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

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

import AuthProvider from "./src/context/AuthContext.js";
import LocationProvider from "./src/context/LocationContext.js";
import TravelProvider from "./src/context/TravelsContext.js";

import i18n from "./src/languages/i18n";

export default function App() {
  const Stack = createNativeStackNavigator();
  StatusBar.setBackgroundColor("#64CCC5");
  return (
    <AuthProvider>
      <LocationProvider>
        <TravelProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Bienvenido">
              <Stack.Screen
                name="Bienvenido"
                component={Home}
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
            </Stack.Navigator>
          </NavigationContainer>
        </TravelProvider>
      </LocationProvider>
    </AuthProvider>
  );
}
