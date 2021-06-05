import { LOGIN_USER, REGISTER_USER, AUTH_USER } from '.././type/type'
import axios from 'axios'

const url = 'http://localhost:5000/auth/';

export const userlogin = (data) => {
    const request = axios('http://localhost:5000/auth/login', data).then(res => 
        res.data
    )

    return {
        type: LOGIN_USER,
        payload: request
    }
}

