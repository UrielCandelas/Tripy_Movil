import { useState, useContext, createContext, useEffect } from "react";

import {
  registerLocation,
  editLocation,
  getLocation,
  deleteLocation,
  getAllLocations,
} from "../api/locations";

export const LocationContext = createContext();

export const useLocations = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useAuth must be used within an LocationProvider");
  }
  return context;
};

const LocationProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState({});
  const registerNewLocation = async (location) => {
    try {
      const costint = parseFloat(location.cost)
      const newLocation = {
        location_name: location.location_name,
        location: location.location,
        description: location.description,
        cost: costint,
        schedule: location.schedule
      }
      const res = await registerLocation(newLocation);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const editSomeLocation = async (location, id) => {
    try {
      const costint = parseFloat(location.cost)
      const newLocation = {
        location_name: location.location_name,
        location: location.location,
        description: location.description,
        cost: costint,
        schedule: location.schedule
      }
      const res = await editLocation(newLocation,id);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getSomeLocation = async (id) => {
    try {
      const res = await getLocation(id);
      setLocation(res.data);
      return res.data
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const deleteSomeLocation = async (id) => {
    try {
      const res = await deleteLocation(id);
      setLocation({});
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getLocations = async () => {
    try {
      const res = await getAllLocations();
      setLocations(res.data);
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
    <LocationContext.Provider
      value={{
        registerNewLocation,
        editSomeLocation,
        getSomeLocation,
        deleteSomeLocation,
        getLocations,
        errors,
        location,
        locations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;