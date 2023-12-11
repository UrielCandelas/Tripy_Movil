import { useContext, createContext, useEffect, useState } from 'react'

import {
  getAllTravels,
  getTravel,
  getSharedTravels,
  addSecondUser,
  getTravelsI,
  getTravelsA,
  registerNewTravel,
  declineRequest,
  getSharedTravel,
  getAllTransports,
  getAllLocationTravels,
  getAllExpenses,
  getAllExtras,
  addTravelRequest,
  getRequest,
  deleteTravel,
} from '../api/travels.js'

import { useAuth } from '../context/AuthContext'

export const TravelContext = createContext()

export const useTravels = () => {
  const context = useContext(TravelContext)
  if (!context) {
    throw new Error('useTravels must be used within an TravelProvider')
  }
  return context
}

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
  const [images, setImages] = useState([])
  const [requests, setRequests] = useState([])

  const { user } = useAuth()

  //const socket = io("http://localhost:3000");

  const getTravels = async () => {
    try {
      const res = await getAllTravels()
      setTravels(res.data)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const getSomeTravel = async (id) => {
    try {
      const res = await getTravel(id)
      setTravel(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

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
  }

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
      }
      const res = await registerNewTravel(newTravel)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
      console.log(error)
    }
  }

  const getTransports = async () => {
    try {
      const res = await getAllTransports()
      setTransports(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }
  const getAllLocationTravelsFunc = async (id) => {
    try {
      const res = await getAllLocationTravels(id)
      setLocationTravels(res.data)
      return res.data
      return res.data
    } catch (error) {
      setErrors([error.response.data])
    }
  }

  const getAllExpensesFunc = async (id) => {
    try {
      const res = await getAllExpenses(id)
      setExpenses(res.data)
      return res.data
    } catch (error) {
      setErrors([error.response.data])
    }
  }
  const getAllExtrasFunc = async (id) => {
    try {
      const extras = await getAllExtras(id)
      setExtra(extras.data)
    } catch (error) {
      setErrors([error.response.data])
    }
  }
  const addRequest = async (data) => {
    try {
      const res = await addTravelRequest(data)
      return res.data
    } catch (error) {
      setErrors([error.response.data])
    }
  }

  const addTravelSecondUser = async (data) => {
    try {
      const res = await addSecondUser(data)
    } catch (error) {
      setErrors([error.response.data])
    }
  }

  const deleteRequest = async (id) => {
    try {
      const res = await declineRequest(id)
    } catch (error) {
      setErrors([error.response.data])
    }
  };
  const getImages = () => {
    const arrimages = [
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestA.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestC.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestE.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestI.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestM.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/defaultTestU.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/acapulcoMain.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/cañonMain.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/tajinMain.png',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/uxmalMain.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/monteMain.jpg',
      'https://raw.githubusercontent.com/ElliotFrias/imgsTripy/main/images/izamalMain.png',
    ]
    setImages(arrimages)
  };

  const getUserRequest = async (id) => {
    try {
      const res = await getRequest(id)
      setRequests(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }
  const deleteSomeTravel = async (id) => {
    try {
      const res = await deleteTravel(id)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timmer = setTimeout(() => {
        setErrors([])
      }, 3000)
      return () => clearTimeout(timmer)
    }
  }, [errors])

  return (
    <TravelContext.Provider
      value={{
        registerNewTravelFunc,
        //editSomeTravel,
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
        getUserRequest,
        setRequests,
        requests,
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
        getImages,
        images,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
export default TravelProvider;
