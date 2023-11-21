import { useContext, createContext,useEffect,useState } from "react";

import {
  getAllTravels,
  getTravel,
  getSharedTravels,
  addSecondUser,
  deleteSecondUser,
  registerNewTravel,
  editTravel,
  deleteTravel,
  getMyTravel,
  getMyTravels,
  getSharedTravel,
  getAllTransports,
  getAllLocationTravels,
  getAllExpenses,
} from '../api/travels.js'

import {useAuth} from '../context/AuthContext'

export const TravelContext = createContext()

export const useTravels = () => {
  const context = useContext(TravelContext)
  if (!context) {
    throw new Error('useAuth must be used within an TravelProvider')
  }
  return context
}

const TravelProvider = ({ children }) => {
  const [errors, setErrors] = useState([])
  const [travels, setTravels] = useState([])
  const [travel, setTravel] = useState({})
  const [transports, setTransports] = useState([]);
  const [locationTravels, setLocationTravels] = useState([]);
  const [expenses, setExpenses] = useState([]);

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
      const res = await getSharedTravels(id)
      setTravels(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const getSomeSharedTravel = async (id) => {
    try {
      const res = await getSharedTravel(id)
      setTravel(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  /*const getAllMyTravels = async () => {
    try {
      const res = await getMyTravels()
      setTravels(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }*/

  const getSomeMyTravel = async (id) => {
    try {
      const res = await getMyTravel(id)
      setTravel(res.data)
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registerNewTravelFunc = async (travel) => {
    try {
      /*const newTravel = {
        id_user1: travel.id_user1,
        id_location: travel.id_location,
        travel_date: travel.travel_date,
        transportation: travel.transportation,
        expenses: travel.expenses,
      }*/
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
      const res = await registerNewTravel(travel)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
      console.log(error)
    }
  }

  const editSomeTravel = async (travel, id) => {
    try {
      const newTravel = {
        id_user1: travel.id_user1,
        id_location: travel.id_location,
        travel_date: travel.travel_date,
        transportation: travel.transportation,
        expenses: travel.expenses,
      }
      const res = await editTravel(newTravel, id)
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
      setTravel({})
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
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
  const getAllLocationTravelsFunc = async(id) => {
    try {
      const res = await getAllLocationTravels(id);
      setLocationTravels(res.data);
      return res.data;
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
        editSomeTravel,
        getSomeTravel,
        deleteSomeTravel,
        getTravels,
        getSomeSharedTravel,
        getAllSharedTravels,
        getSomeMyTravel,
        getTransports,
        getAllLocationTravelsFunc,
        getAllExpensesFunc,
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
  )
}
export default TravelProvider;