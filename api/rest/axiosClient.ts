import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://admin-panel-sample-backend.onrender.com/',
});

export default axiosClient;
