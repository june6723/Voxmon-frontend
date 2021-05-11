import {AUTH_USER, LOGIN_USER} from '../_actions/types'
import {REGISTER_USER} from '../_actions/types' 

export default function(state={}, action){
    switch(action.type) {
        case LOGIN_USER:
                return { ...state, loginSuccess:action.payload}
        case REGISTER_USER:
                return { ...state, RegisterSuccess:action.payload}
        case AUTH_USER:
                return {...state, userData:action.payload}
        default:
            return state;
            
    }
}