import axios from './axios'

// Viajes Generales
export const getAllTravels = () => axios.get('/travels')
export const getTravel = (id) => axios.get(`/travels/${id}`)
export const getSharedTravels = (id) => axios.get(`/travels/shared/${id}`)
export const getSharedTravel = (id) => axios.get(`/travels/shared/one/${id}`)
export const addSecondUser = (id) => axios.put(`/travels/shared/${id}`)
export const deleteSecondUser = (id) => axios.put(`/travels/secondShared/${id}`)

// Mis viajes
export const getMyTravels = () => axios.get('/my-travels')
export const getMyTravel = (id) => axios.get(`/my-travels/${id}`)
export const registerNewTravel = (travel) => axios.post('/my-travels', travel)
export const editTravel = (travel, id) => axios.put(`/my-travels/${id}`, travel)
export const deleteTravel = (id) => axios.delete(`/travels/${id}`)

export const getAllTransports = () => axios.get('/transports')