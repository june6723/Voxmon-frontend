import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../action/type'

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER: 
      return { ...state,  LoginResult: action.payload , isLoggedIn: true};
    case REGISTER_USER:
     return {...state, RegisterResult:action.payload};
    default:
      return {...state};
  }
}