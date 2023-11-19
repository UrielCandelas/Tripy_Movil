import { useContext, useState, useEffect, createContext } from "react";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import { login, registerUser, verifyTokenRequest } from "../api/auth.js";

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

  const createStore = async (key, value) => {
    try {
      const item = await setItemAsync(key, value);
      return item;
    } catch (error) {
      console.log(error.message);
    }
  };
  const getStore = async (key) => {
    const result = await getItemAsync(key);
    if (result) {
      return result;
    }
    return null;
  };
  const signup = async (user) => {
    const confirmPassword = user.confirmPassword
    const password = user.password
    if (password != confirmPassword) {
      setErrors(["No coninciden las 2 contraseñas"]);
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
      const res = await registerUser(data);
      console.log(res.data.token)
      //const store = await createStore("token", res.data.token);
      const store = await setItemAsync("token", res.data.token);
      setIsAuthenticated(true);
      setUser(res.data);
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
      //const store = await createStore("token", res.data.token);
      const store = await setItemAsync("token", res.data.token);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const logout = async () => {
    try {
      const store = await deleteItemAsync("token");
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
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
        const res = await verifyTokenRequest({token: store});
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
      }
    }
    checklogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        errors,
        signup,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
