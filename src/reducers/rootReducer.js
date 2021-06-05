import {LOGIN_USER, REGISTER_USER, AUTH_USER} from '../type/type'

const rootReducer = (state = {}, action) => {

    switch(action.type){
        case LOGIN_USER:
            return {...state, data:action.payload}
    }


}

export default rootReducer