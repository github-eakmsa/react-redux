
import { counterReducer } from "./counterReducer.js";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    counter: counterReducer
})
