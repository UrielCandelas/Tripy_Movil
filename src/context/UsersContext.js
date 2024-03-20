import { createContext, useState, useContext, useEffect } from "react";
import {
  getComentariesByID,
  getContacts,
  getUserMessages,
  getUsersByRequest,
  registerCommentaries,
  sendMessage,
  getComentsAndTravelsInactive,
} from "../api/users";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [usersByRequest, setUsersByRequest] = useState([]);
  const [commentaries, setCommentaries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [travelsAndComents, setTravelsAndComents] = useState([]);

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
  };

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
  };

  const getUserContacts = async (id) => {
    try {
      const res = await getContacts(id);
      setContacts(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const registerNewMessage = async (data) => {
    try {
      const res = await sendMessage(data);
      return res.data;
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getMessages = async (data) => {
    try {
      const res = await getUserMessages(data);
      setMessages(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getTravelsComents = async (id) => {
    try {
      const res = await getComentsAndTravelsInactive(id);
      setTravelsAndComents(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timmer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timmer);
    }
  }, [errors]);
  return (
    <UserContext.Provider
      value={{
        errors,
        usersByRequest,
        commentaries,
        contacts,
        messages,
        travelsAndComents,
        setMessages,
        getMessages,
        getUserRequest,
        registerNewMessage,
        getUserContacts,
        registerNewCommentary,
        getComentaries,
        getTravelsComents,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
