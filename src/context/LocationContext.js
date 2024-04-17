import { useState, useContext, createContext, useEffect } from "react";

import {
	deleteLocation,
	editLocation,
	getAllLocations,
	getLocation,
	getLocationsAndTransports,
	registerLocation,
	travelsImg2,
} from "../api/locations";

export const LocationContext = createContext();

export const useLocations = () => {
	const context = useContext(LocationContext);
	if (!context) {
		throw new Error("useLocations must be used within an LocationProvider");
	}
	return context;
};

const LocationProvider = ({ children }) => {
	const [locAndTransp, setLocAndTransp] = useState([]);
	const [errors, setErrors] = useState([]);
	const [locations, setLocations] = useState([]);
	const [location, setLocation] = useState({});
	const [travels, setTravels] = useState([]);
	// const [locationsAndTransports, setLocationsAndTransports] = useState([]);
	const registerNewLocation = async (location) => {
		try {
			const costint = parseFloat(location.cost);
			const newLocation = {
				location_name: location.location_name,
				location: location.location,
				description: location.description,
				cost: costint,
				schedule: location.schedule,
				image1: location.image1,
				image2: location.image2,
			};
			await registerLocation(newLocation);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const editSomeLocation = async (location, id) => {
		try {
			const costint = parseFloat(location.cost);
			const newLocation = {
				location_name: location.location_name,
				location: location.location,
				description: location.description,
				cost: costint,
				schedule: location.schedule,
			};
			await editLocation(newLocation, id);
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
			return res.data;
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const getTravelsImg2 = async (id) => {
		try {
			const res = await travelsImg2(id);
			setTravels(res.data);
			return res.data;
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const deleteSomeLocation = async (id) => {
		try {
			await deleteLocation(id);
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

	const getLocations_Transports = async () => {
		try {
			const res = await getLocationsAndTransports();
			setLocAndTransp(res.data);
		} catch (error) {
			console.log(error);
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
				getTravelsImg2,
				getLocations_Transports,
				locAndTransp,
				travels,
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
