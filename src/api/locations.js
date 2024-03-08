import axios from './axios'

export const registerLocation = (location) => axios.post('/locations', location)

export const editLocation = (location, id) =>
  axios.put(`/locations/${id}`, location)

export const getLocation = (id) => axios.get(`/locations/${id}`)

export const getLocationsAndTransports = () =>
  axios.get('/locations/transports')

export const deleteLocation = (id) => axios.delete(`/locations/${id}`)

export const getAllLocationsAndImages = () => axios.get('/locations')

export const getTravelsAndImage2 = (id) => axios.get(`/locations/second/${id}`)

export const locationData = (id) => axios.get(`/locations/data/${id}`)
