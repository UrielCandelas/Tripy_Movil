import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.1.1.26:3000/api',
    withCredentials: true
})
export default instance