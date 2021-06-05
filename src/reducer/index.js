import { combineReducers } from "redux";
import auth from "./authreducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key:['Token'],
  storage
};



const rootReducer = combineReducers({
  auth
});

export default persistReducer(persistConfig,rootReducer);