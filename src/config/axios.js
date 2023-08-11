import axios from 'axios'

export default axios.create({
    withCredentials: true,
    // baseURL: 'http://127.0.0.1:8000/api/',
    baseURL: 'https://api-quemami.ostars.cloud/api/',
    headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    }
})