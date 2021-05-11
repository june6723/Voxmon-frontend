import Axios from 'axios';
import { LOGIN_USER } from './types';
import { REGISTER_USER } from './types';
import { AUTH_USER } from './types';

export function loginUser(dataTosubmit){
    const request = Axios.post('http://localhost:5000/auth/login',dataTosubmit).then(response => 
        response.data
    )

    return {
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser(dataTosubmit){
    const request = Axios.post('http://localhost:5000/auth/register',dataTosubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }

}


export function auth(dataTosubmit){
    const request = Axios.get('http://localhost:5000/auth/refresh-token',dataTosubmit)
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }

}
