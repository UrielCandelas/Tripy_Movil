import axios from "./axios";

export const registerLocation = (location) =>
	axios.post("/locations", location, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
export const getLocationsAndTransports = () =>
	axios.get("/locations/transports");

export const getAllLocations = () => axios.get("/locations");

export const locationData = (id) => axios.get(`/locations/data/${id}`);

export const travelsImg2 = (id) => axios.get(`/locations/second/${id}`);

export const editLocation = (location, id) =>
	axios.put(`/locations/${id}`, location);

export const getLocation = (id) => axios.get(`/locations/${id}`);

export const deleteLocation = (id) => axios.delete(`/locations/${id}`);

// export const getAllLocations = () => axios.get('/locations')

/* export const getLocationByTravel = (data) =>
  axios.get(`/locations/travel`, data) */
