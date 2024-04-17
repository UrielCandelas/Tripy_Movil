import axios from "./axios";

// Viajes Generales
export const getTravel = (id) => axios.get(`/travels/${id}`);

export const addSecondUser = (data) => axios.put(`/travels/shared`, data);

export const deleteSecondUser = (id) =>
	axios.put(`/travels/secondShared/${id}`);

// Mis viajes
export const registerNewTravel = (travel) =>
	axios.post("/travels/add/new", travel);

export const deleteTravel = (id) => axios.delete(`/travels/${id}`);

export const addTravelRequest = (data) =>
	axios.post(`/travels/requests/new`, data);

export const declineRequest = (id) =>
	axios.put(`/travels/requests/decline`, id);

export const getTravelsI = (id) =>
	axios.get(`/travels/requested/inactive/${id}`);

export const getTravelsA = (id) => axios.get(`/travels/requested/active/${id}`);

export const getRequest = (id) => axios.get(`/request/get/${id}`);

export const getRegisterComent = (comentario) =>
	axios.post(`/travels/locacionComentario`, comentario);

export const addNewExpense = (data) =>
	axios.post("/travels/expenses/add", data);

export const getExpenses = (id) => axios.get(`/travels/expenses/get/${id}`);
