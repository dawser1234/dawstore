import { combineReducers } from "redux";
import { productReducer } from './Productreducer';
import {userReducer} from './Userreducer';
export const rootReducer = combineReducers({ productReducer , userReducer})