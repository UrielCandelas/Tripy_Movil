import axios from "axios";

export const getUserByRequest = (id) => axios.get(`/user/request/${id}`);

export const registerNewCommentary = (data) => {
	axios.post(`/user/commentary`, data);
};
export const getCommentariesById = (id) =>
	axios.get(`/user/commentary/all-commentaries/${id}`);

export const getContacts = (id) => axios.get(`/user/contacts/${id}`);

export const registerNewMessage = (data) => axios.post(`/user/message`, data);

export const getMessages = (data) => axios.get(`/user/get/messages`, data);
