import { initializeApp } from "firebase/app";
import {
	// getAuth,
	initializeAuth,
	getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
	apiKey: "AIzaSyApmt5cHJvr3ORre9MDfw5ilGahDi5rhjo",
	authDomain: "tripy-b53f3.firebaseapp.com",
	projectId: "tripy-b53f3",
	storageBucket: "tripy-b53f3.appspot.com",
	messagingSenderId: "30513835951",
	appId: "1:30513835951:web:c375a80151612a21d3895a",
	measurementId: "G-H4WFE7GB9E",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
