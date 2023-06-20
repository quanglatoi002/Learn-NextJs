import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error: AxiosError) {
        return Promise.reject(error.response?.data); //showld be error response body
    }
);
export default axiosClient;
