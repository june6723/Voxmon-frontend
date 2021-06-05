import reducer from './reducer'
import { persistStore } from 'redux-persist'
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
)(createStore);

const store = createStoreWidthMiddleware(
  // 리듀서를 생성후 넣어준다
    reducer,
  // 
  //개발자 도구를 사용하기 위한 설정
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store);

export default store