import axios from "axios";
import { API_BASE_URL } from "../config/oauth.config";


const instance = axios.create({
    baseURL: API_BASE_URL
});

instance.interceptors.request.use(function (config) {
    if (typeof window !== "undefined" && window
        && window.localStorage
        && window.localStorage.getItem('access_token')) {
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access_token');
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


// instance.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     return error.response.data;
// });

export default instance;