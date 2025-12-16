import axios from './axios.customize'


const loginAPI = (email, password) => {
    const URL_BACKEND = '/api/auth/login'
    const data = {
        email: email,
        password: password
    }

    return axios.post(URL_BACKEND, data);
}

const registerUserAPI = (username, email, password) => {
    const URL_BACKEND = '/api/user/register';
    const data = {
        username: username,
        email: email,
        password: password
    }

    return axios.post(URL_BACKEND, data)
}

const loginWithGoogle = (idToken) => {
    const URL_BACKEND = '/api/auth/google';
    const data = {
        idToken: idToken
    }

    return axios.post(URL_BACKEND, data)
}


export { loginAPI, loginWithGoogle, registerUserAPI }