import axios from './axios'

// Viajes Generales
export const getAllTravels = () => axios.get('/travels')
export const getTravel = (id) => axios.get(`/travels/${id}`)
export const getSharedTravels = (id) => axios.get(`/travels/shared/${id}`)
export const getSharedTravel = (id) => axios.get(`/travels/shared/one/${id}`)
export const addSecondUser = (data) => axios.put(`/travels/shared`, data)
export const deleteSecondUser = (id) => axios.put(`/travels/secondShared/${id}`)
export const getAllLocationTravels = (id) => axios.get(`/travels/location/${id}`)

// Mis viajes
export const getMyTravels = () => axios.get('/my-travels')
export const getMyTravel = (id) => axios.get(`/my-travels/${id}`)
export const registerNewTravel = (travel) => axios.post('/my-travels', travel)
export const editTravel = (travel, id) => axios.put(`/my-travels/${id}`, travel)
export const deleteTravel = (id) => axios.delete(`/travels/${id}`)

export const getAllTransports = () => axios.get('/transports')

export const getAllExpenses = id => axios.get(`/expenses/${id}`)

export const getAllExtras = id => axios.get(`/travels/extras/${id}`)

export const addTravelRequest = data => axios.post(`/travels/requests/new`,data)