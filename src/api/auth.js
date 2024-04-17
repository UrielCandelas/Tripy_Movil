import axios from './axios.js'

export const registerUser = (data) => axios.post('/register', data)

export const login = (data) => axios.post('/login', data)

export const logout = () => axios.post('/logout')

export const editUserAcount = (data) => axios.put('/edit/acount', data)

export const verifyToken = (data) => axios.post('/auth/verify/mobile', data)

export const oAuth = () => axios.get('/oauth', data)

export const getUsersByRequest = (id) => axios.get(`/request/${id}`)

export const verifyOTP = (data) => axios.post('/auth/otp/movil', data)

export const authActive = (id) => axios.get(`/auth/active/${id}`)
