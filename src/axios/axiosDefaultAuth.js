import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:1100/api/auth/'
})