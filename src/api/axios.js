import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.126.26.54:3000/api',
    withCredentials: true
})
export default instance