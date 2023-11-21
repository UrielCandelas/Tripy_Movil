import axios from './axios.js'

export const registerUser = (data) => axios.post('/register', data)

export const login = (data) => axios.post('/login', data)

export const verifyTokenRequest = (data) => axios.post('/auth/verifyMobile',data)

export const getUserById = (id) => axios.get(`/user/${id}`)