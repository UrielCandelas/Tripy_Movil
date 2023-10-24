import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from 'react-native';

import VerViajes1 from "./pages/VerViajes1";
import VerViajes2 from "./pages/VerViajes2";
import VerMiViaje from "./pages/VerMiViaje";
import Gastos from "./pages/Gastos";
import VerViajes3 from "./pages/VerViajes3";
import Destino from "./pages/Destino";
import Home from "./pages/Home.js";
import Inicio from "./pages/Inicio.js";
import CreateAccount from "./pages/CreateAccount.js";
import CreateAccount2 from "./pages/CreateAccount2.js";
import LandPage from "./pages/LandPage.js";
import MiPerfil from "./pages/MiPerfil"
import Perfil from './pages/Perfil'
import AddReview from './pages/AddReview'
import EditarPerfil from "./pages/EditarPerfil";
import CrearViaje from "./pages/CrearViaje";
import Solicitudes from "./pages/Solicitudes";
import AgendarGastos from "./pages/AgregarGastos"
import Inicio_ from "./pages/Inicio_";

export default function App() {
  const Stack = createNativeStackNavigator();
  StatusBar.setBackgroundColor('#64CCC5'); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="LandPage"
          component={LandPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AgendarGastos"
          component={AgendarGastos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bienvenido"
          component={Home}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Inicio_"
          component={Inicio_}
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
          name="Solicitudes"
          component={Solicitudes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
