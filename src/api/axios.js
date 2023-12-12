import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.30.248:3000/api',
    withCredentials: true
})
export default instance