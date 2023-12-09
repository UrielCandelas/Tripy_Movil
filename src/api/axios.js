import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.52.248:3000/api',
    withCredentials: true
})
export default instance