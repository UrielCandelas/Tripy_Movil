import axios from './axios'

// Viajes Generales
export const addSecondUser = (data) => axios.put(`/travels/shared`, data)

export const deleteSecondUser = (id) => axios.put(`/travels/secondShared/${id}`)

export const registerNewTravel = (travel) => axios.post('/travels/add/new', travel)

export const deleteTravel = (id) => axios.delete(`/travels/${id}`)

export const getAllExtras = (id) => axios.get(`/travels/extras/${id}`)

export const addTravelRequest = (data) =>
  axios.post(`/travels/requests/new`, data)

export const declineRequest = (id) => axios.put(`/travels/requests/decline`, id)

export const getTravelsI = (id) =>
  axios.get(`/travels/requested/inactive/${id}`)

export const getTravelsA = (id) => axios.get(`/travels/requested/active/${id}`)

export const getRequest = (id) => axios.get(`/request/get/${id}`)
