import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.168.248:3000/api',
    withCredentials: true
})
export default instance