import axios from 'axios';

const instance = axios.create({
    baseURL:'https://backend.mo3ts.com'
})

export default instance;