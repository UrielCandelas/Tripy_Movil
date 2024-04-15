import { useContext, createContext, useEffect, useState } from "react";

import {
	addSecondUser,
	addTravelRequest,
	declineRequest,
	// deleteSecondUser,
	addNewExpense,
	deleteTravel,
	getRegisterComent,
	getRequest,
	getTravel,
	getTravelsA,
	getTravelsI,
	registerNewTravel,
	getExpenses,
} from "../api/travels.js";

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
	const [travel, setTravel] = useState({});
	const [expenses, setExpenses] = useState([]);
	const [travelsInactive, setTravelsInactive] = useState([]);
	const [travelsActive, setTravelsActive] = useState([]);
	const [requests, setRequests] = useState([]);

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
			await registerNewTravel(newTravel);
		} catch (error) {
			console.log(error);
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const addRequest = async (data) => {
		try {
			const res = await addTravelRequest(data);
			return res.data;
		} catch (error) {
			setErrors([error.response.data]);
		}
	};

	const addTravelSecondUser = async (data) => {
		try {
			await addSecondUser(data);
		} catch (error) {
			setErrors([error.response.data]);
		}
	};

	const deleteRequest = async (id) => {
		try {
			await declineRequest(id);
		} catch (error) {
			setErrors([error.response.data]);
		}
	};

	const getUserRequest = async (id) => {
		try {
			const res = await getRequest(id);
			setRequests(res.data);
			return res.data;
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};
	const deleteSomeTravel = async (id) => {
		try {
			await deleteTravel(id);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const registerComent = async (data) => {
		try {
			await getRegisterComent(data);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const registerExpense = async (data) => {
		try {
			await addNewExpense(data);
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				return setErrors(error.response.data);
			}
			setErrors([error.response.data.message]);
		}
	};

	const getExpensesFunc = async (id) => {
		try {
			const res = await getExpenses(id);
			setExpenses(res.data);
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
		<TravelContext.Provider
			value={{
				registerNewTravelFunc,
				// editSomeTravel,
				getSomeTravel,
				deleteSomeTravel,
				getTravelsInactive,
				addRequest,
				addTravelSecondUser,
				deleteRequest,
				getTravelsActive,
				getUserRequest,
				setRequests,
				registerExpense,
				getExpensesFunc,
				requests,
				travelsActive,
				travelsInactive,
				expenses,
				errors,
				travel,
				registerComent,
			}}
		>
			{children}
		</TravelContext.Provider>
	);
};
export default TravelProvider;
