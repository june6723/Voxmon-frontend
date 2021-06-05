
import { request } from "../util/axios";
import axios from 'axios'
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from './type'



export const loginUser = async (dataToSubmit) => {

    try{
    const data = await axios.post('/auth/login',dataToSubmit)
    const response_data = await data.data
    return{
        type: LOGIN_USER,
        payload: response_data
    }
    }catch(error){
        console.log("Fail to Login:",error)
        return error
    }
    
    
}

export const registerUser = async (dataToSubmit) => {
    
    try{
        const data = await axios.post('/auth/register', dataToSubmit)
        const response_data = await data.data
        return{
            type:REGISTER_USER,
            payload: response_data
        }
    }catch(error){
        console.log("Fail to Register",error)
        return error
    }
    
}

