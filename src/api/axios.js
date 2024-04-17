import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://10.107.98.195:3000/api',
  withCredentials: true,
})
export default instance
