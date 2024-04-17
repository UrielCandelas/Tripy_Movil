import { useContext, useState, useEffect, createContext } from "react";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
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
export const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState([]);
	const [isOnProcessing, setIsOnProcessing] = useState(false);
	const [provUser, setProvUser] = useState(null);
	const { t } = useTranslation();

  const signup = async (user) => {
    const confirmPassword = user.confirmPassword
    const password = user.password
    if (password != confirmPassword) {
      return setErrors([t('ErrorPass')])
    }
    const data = {
      name: user.name,
      lastName: user.lastName,
      secondLastName: user.secondLastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
    }
    try {
      const res = await registerUser(data)
      //const store = await createStore("token", res.data.token);
      const verify = await setItemAsync('verify', res.data.verify)
      console.log(res.data)
      setProvUser(res.data)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const signin = async (user) => {
    try {
      const res = await login(user)
      //const store = await createStore("token", res.data.token);
      const store = await setItemAsync('token', res.data.token)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

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
      const store = await getItemAsync('verify')
      console.log(store)
      const data = {
        otp,
        verify: store,
      }
      const res = await verifyOTP(data)
      if (res.status == 200) {
        // setIsAuthenticated(true)
        setIsOnProcessing(true)
        // setProvUser(null)
        // setUser(res.data)
      }
      return res.status
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }
  
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

	useEffect(() => {
		async function checklogin() {
			const store = await getItemAsync("token");
			if (!store) {
				setIsAuthenticated(false);
				setUser(null);
				setLoading(false);
				return;
			}
			try {
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
			} catch (error) {
				setIsAuthenticated(false);
				setUser(null);
				setLoading(false);
				setErrors(error.response.data);
				console.log(error);
			}
		}
		checklogin();
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
				logoutFunc,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
