import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form- urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;
