import axios from './axios'

export const registerLocation = location => axios.post("/locations",location)

export const editLocation = (location,id) => axios.put(`/locations/${id}`,location)

export const getLocation = id => axios.get(`/locations/${id}`)

export const deleteLocation = id => axios.delete(`/locations/${id}`)

export const getAllLocations = () => axios.get("/locations")

export const getLocationByTravel =id=>axios.get(`/locations/travel/${id}`)
