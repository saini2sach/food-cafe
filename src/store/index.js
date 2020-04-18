import { createStore, combineReducers, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import appReducer from "../App/reducer";

const rootReducer = combineReducers({
    appReducer
});


const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)

export default store;
