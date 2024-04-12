import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://172.20.10.5:3000/api',
  withCredentials: true,
})
export default instance
