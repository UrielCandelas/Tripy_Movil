import axios from './axios.js'

export const registerCommentaries = (data) =>
  axios.post('/user/commentary', data)

export const getComentariesByID = (id) =>
  axios.get(`/user/commentary/all-commentaries/${id}`)

export const getUsersByRequest = (id) => axios.get(`/user/request/${id}`)

export const getContacts = id => axios.get(`/user/contacts/${id}`)

export const sendMessage = (data) => axios.post('/user/message', data)

export const getUserMessages = (data) => axios.post('/user/get/messages', data)

export const getComentsAndTravelsInactive = (id) => axios.get(`/user/coments/travels/${id}`)

export const identitySender = (data) => axios.post("/user/send/data", data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export const getAccountRequest = () => axios.get('/admin/get/requests')

export const acceptRequest = (id) => axios.put(`/admin/accept/requests/${id}`)

export const declineRequest = (data, id) => axios.put(`/admin/decline/requests/${id}`, data)

