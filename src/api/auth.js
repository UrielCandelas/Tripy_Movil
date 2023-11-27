import axios from './axios.js'

export const registerUser = (data) => axios.post('/register', data)

export const login = (data) => axios.post('/login', data)

export const verifyTokenRequest = (data) => axios.post('/auth/verifyMobile',data)

export const getUserById = (id) => axios.get(`/user/${id}`)

export const getUsersByRequest = id => axios.get(`/user/request/${id}`)

export const editUserAcount = data => axios.put('/auth/edit-acount', data)

export const registerCommentaries = data => axios.post('/user/commentary', data)

export const getComentariesByID = id => axios.get(`/user/commentary/all-commentaries/${id}`)