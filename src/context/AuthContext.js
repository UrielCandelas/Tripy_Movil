import { useContext, useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	registerUser,
	editUserAcount,
	login,
	logout,
	// getAuthorizedURL,
	// googleAuth,
	// verifyIsActive,
	verifyOTP,
	changeEmail,
	resendOTP,
	verifyToken,
} from "../api/auth.js";
import { useTranslation } from "react-i18next";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
WebBrowser.maybeCompleteAuthSession();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState([]);
	const [isOnProcessing, setIsOnProcessing] = useState(false);
	const [provUser, setProvUser] = useState(null);
	const [googleUser, setGoogleUser] = useState(null);
	const { t } = useTranslation();

	const [request, response, promptAsync] = Google.useAuthRequest({
		iosClientId: process.env.IOS_CLIENT_ID,
		androidClientId:
			"174815816857-ajcqfq00pkr4jpsoa97t58ui4nff55j2.apps.googleusercontent.com",
	});
	useEffect(() => {
		if (response?.type === "success") {
			const { id_token } = response.params;
			const credential = GoogleAuthProvider.credential(id_token);
			signInWithCredential(auth, credential);
		}
	}, [response]);
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setGoogleUser(user.stsTokenManager.accessToken);
				const res = await verifyToken({
					token: user.stsTokenManager.accessToken,
				});
				if (!res) {
					setUser(null);
					setIsAuthenticated(false);
					setLoading(false);
					return;
				}
				setUser(res.data);
				setIsAuthenticated(true);
				setLoading(false);
			}
		});
		return () => unsub();
	}, []);

	const signup = async (user) => {
		const confirmPassword = user.confirmPassword;
		const password = user.password;
		if (password != confirmPassword) {
			return setErrors([t("ErrorPass")]);
		}
		const data = {
			name: user.name,
			lastName: user.lastName,
			secondLastName: user.secondLastName,
			userName: user.userName,
			email: user.email,
			password: user.password,
		};
		try {
			const res = await registerUser(data);
			await AsyncStorage.setItem("verify", res.data.verify);
			setProvUser(res.data);
			return res.data;
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const signin = async (user) => {
		try {
			const res = await login(user);
			await AsyncStorage.setItem("token", res.data.token);
			setUser(res.data);
			setIsAuthenticated(true);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const editAcount = async (user) => {
		try {
			const password = user.newPassword;
			const confirmPassword = user.confirmNewPassword;
			if (password != confirmPassword) {
				return setErrors([t("ErrorPass")]);
			}
			const data = {
				userName: user.userName,
				email: user.email,
				newEmail: user.newEmail,
				newPassword: user.newPassword,
				password: user.password,
				id: user.id,
			};
			const res = await editUserAcount(data);
			setUser(res.data);
			setIsAuthenticated(true);
			return res.data;
		} catch (error) {
			setErrors([error.response.data]);
		}
	};

	const verifyOTPFunc = async (otp) => {
		try {
			const store = await AsyncStorage.getItem("verify");
			const data = {
				otp,
				verify: store,
			};
			const res = await verifyOTP(data);
			if (res.status == 200) {
				setIsOnProcessing(true);
			}
			return res.status;
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const resendOTPFunc = async (data) => {
		try {
			const email = {
				email: data,
			};
			await resendOTP(email);
			setIsOnProcessing(true);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const changeEmailFunc = async (data, id) => {
		try {
			await changeEmail(data, id);
			setIsOnProcessing(true);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const promptAsyncFunc = () => {
		promptAsync();
	};

	const logoutFunc = async () => {
		try {
			await AsyncStorage.removeItem("token");
			setUser(null);
			setIsAuthenticated(false);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	useEffect(() => {
		async function checkLogin() {
			const store = await AsyncStorage.getItem("token");
			if (!store && !googleUser) {
				setIsAuthenticated(false);
				setUser(null);
				setLoading(false);
				return;
			}
			try {
				if (store) {
					const res = await verifyToken({ token: store });
					if (!res) {
						setUser(null);
						setIsAuthenticated(false);
						setLoading(false);
						return;
					}
					setUser(res.data);
					setIsAuthenticated(true);
					setLoading(false);
				}
				if (googleUser) {
					const res = await verifyToken({ token: googleUser });
					if (!res) {
						setUser(null);
						setIsAuthenticated(false);
						setLoading(false);
						return;
					}
					setUser(res.data);
					setIsAuthenticated(true);
					setLoading(false);
				}
			} catch (error) {
				setIsAuthenticated(false);
				setUser(null);
				setLoading(false);
				setErrors(error.response.data);
			}
		}
		checkLogin();
	}, []);

	useEffect(() => {
		if (errors.length > 0) {
			const timmer = setTimeout(() => {
				setErrors([]);
			}, 3000);
			return () => clearTimeout(timmer);
		}
	}, [errors]);

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				loading,
				errors,
				isOnProcessing,
				provUser,
				changeEmailFunc,
				resendOTPFunc,
				verifyOTPFunc,
				setIsOnProcessing,
				signup,
				signin,
				logout,
				editAcount,
				promptAsyncFunc,
				logoutFunc,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
