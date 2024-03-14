import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import newsLetterReducer from "./Slices/newsletterSclice"
const reducer = combineReducers({
    newsLetterState: newsLetterReducer
})



const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export default store