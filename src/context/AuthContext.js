import { useContext, useState, useEffect, createContext } from "react";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import {
  getUserById,
  login,
  registerUser,
  verifyTokenRequest,
  getUsersByRequest,
  editUserAcount,
  registerCommentaries,
  getComentariesByID
} from "../api/auth.js";

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
  const [userById, setUserById] = useState([]);
  const [usersByRequest, setUsersByRequest] = useState([]);
  const [commentaries, setCommentaries] = useState([]);

  const signup = async (user) => {
    const confirmPassword = user.confirmPassword;
    const password = user.password;
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
    };
    try {
      const res = await registerUser(data);
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
  const getUser = async (id) => {
    try {
      const res = await getUserById(id);
      setUserById(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getUserRequest = async (id) => {
    try {
      const res = await getUsersByRequest(id);
      setUsersByRequest(res.data);
      return res.data;
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
        return setErrors(["No coninciden las 2 contraseñas"]);
      }
      const data = {
        userName: user.userName,
        email: user.email,
        newEmail: user.newEmail,
        newPassword: user.newPassword,
        password: user.password,
        id: user.id
      };
      const res = await editUserAcount(data);
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data;
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const registerNewCommentary = async (commentary) => {
    try {
      const res = await registerCommentaries(commentary);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  }

  const getComentaries = async (id) => {
    try {
      const res = await getComentariesByID(id);
      setCommentaries(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  }
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
        const res = await verifyTokenRequest({ token: store });
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
        userById,
        usersByRequest,
        commentaries,
        getUserRequest,
        getUser,
        signup,
        signin,
        logout,
        editAcount,
        registerNewCommentary,
        getComentaries
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
