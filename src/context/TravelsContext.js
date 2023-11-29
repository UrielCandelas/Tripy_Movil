import { useContext, createContext, useEffect, useState } from "react";

import {
  getAllTravels,
  getTravel,
  getSharedTravels,
  addSecondUser,
  deleteSecondUser,
  getTravelsI,
  getTravelsA,
  registerNewTravel,
  editTravel,
  deleteTravel,
  getMyTravel,
  getMyTravels,
  declineRequest,
  getSharedTravel,
  getAllTransports,
  getAllLocationTravels,
  getAllExpenses,
  getAllExtras,
  addTravelRequest,
} from "../api/travels.js";

import io from "socket.io-client";

import { useAuth } from "../context/AuthContext";

export const TravelContext = createContext();

export const useTravels = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error("useTravels must be used within an TravelProvider");
  }
  return context;
};

const TravelProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [travels, setTravels] = useState([]);
  const [travel, setTravel] = useState({});
  const [transports, setTransports] = useState([]);
  const [locationTravels, setLocationTravels] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [extra, setExtra] = useState({});
  const [datosDesdeBD, setDatosDesdeBD] = useState([]);
  const [travelsInactive, setTravelsInactive] = useState([]);
  const [travelsActive, setTravelsActive] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  const socket = io("http://10.126.26.54:3000", {
    query: { id: user ? user.id : 0 },
  });

  const getTravels = async () => {
    try {
      const res = await getAllTravels();
      setTravels(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getSomeTravel = async (id) => {
    try {
      const res = await getTravel(id);
      setTravel(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getAllSharedTravels = async (id) => {
    try {
      const res = await getSharedTravels(id);
      setTravels(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getSomeSharedTravel = async (id) => {
    try {
      const res = await getSharedTravel(id);
      setTravel(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getTravelsInactive = async (id) => {
    try {
      const res = await getTravelsI(id);
      setTravelsInactive(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getTravelsActive = async (id) => {
    try {
      const res = await getTravelsA(id);
      setTravelsActive(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const registerNewTravelFunc = async (travel) => {
    try {
      const newTravel = {
        id_user1: travel.id_user1,
        id_location: travel.id_location,
        travel_date: travel.travel_date,
        id_transportation: travel.id_transportation,
        expense: travel.expense,
        quantity: travel.quantity,
        extra: travel.extra,
        companions: travel.companions,
      };
      const res = await registerNewTravel(travel);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
      console.log(error);
    }
  };

  const editSomeTravel = async (travel, id) => {
    try {
      const newTravel = {
        id_user1: travel.id_user1,
        id_location: travel.id_location,
        travel_date: travel.travel_date,
        transportation: travel.transportation,
        expenses: travel.expenses,
      };
      const res = await editTravel(newTravel, id);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const deleteSomeTravel = async (id) => {
    try {
      const res = await deleteTravel(id);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getTransports = async () => {
    try {
      const res = await getAllTransports();
      setTransports(res.data);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const getAllLocationTravelsFunc = async (id) => {
    try {
      const res = await getAllLocationTravels(id);
      setLocationTravels(res.data);
      return res.data;
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const getAllExpensesFunc = async (id) => {
    try {
      const res = await getAllExpenses(id);
      setExpenses(res.data);
      return res.data;
    } catch (error) {
      setErrors([error.response.data]);
    }
  };
  const getAllExtrasFunc = async (id) => {
    try {
      const extras = await getAllExtras(id);
      setExtra(extras.data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };
  const addRequest = async (data) => {
    try {
      const res = await addTravelRequest(data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const addTravelSecondUser = async (data) => {
    try {
      const res = await addSecondUser(data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const deleteRequest = async (id) => {
    try {
      const res = await declineRequest(id);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const sendMessage = async (data) => {
    socket.emit("sendMessage", data);
    socket.on("receive_message", (data) => {
      console.log(data)
      setMessages([...messages, data]);
    })
  };
  const joinRoom = async (data) => {
    socket.emit("joinRoom", data);

  };

  useEffect(() => {
    if (errors.length > 0) {
      const timmer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timmer);
    }
  }, [errors]);

  useEffect(() => {
    const handleSendRequest = (data) => {
      setDatosDesdeBD(data);
    };
    const handleSendContacts = (data) => {
      setContacts(data);
    }

    const handleSendReceiveMessage = (data) => {
      setMessages((prev)=>[...prev,data]);
    }
    socket.on("send_request", handleSendRequest);
  
    
    socket.on("send_contacts", handleSendContacts);


    socket.on("receive_message",(data=>{
      setMessages((prev)=>[...prev,data]);
    }));


    return () => {
      socket.off("send_request", handleSendRequest);
      socket.off("send_contacts", handleSendContacts);
    };

  }, [socket]);


  return (
    <TravelContext.Provider
      value={{
        registerNewTravelFunc,
        editSomeTravel,
        getSomeTravel,
        deleteSomeTravel,
        getTravels,
        getSomeSharedTravel,
        getAllSharedTravels,
        getTravelsInactive,
        getTransports,
        getAllLocationTravelsFunc,
        getAllExpensesFunc,
        getAllExtrasFunc,
        addRequest,
        addTravelSecondUser,
        deleteRequest,
        getTravelsActive,
        sendMessage,
        joinRoom,
        messages,
        message,
        contacts,
        travelsActive,
        travelsInactive,
        extra,
        datosDesdeBD,
        expenses,
        errors,
        travel,
        travels,
        transports,
        locationTravels,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
export default TravelProvider;
