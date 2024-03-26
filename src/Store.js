import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import newsLetterReducer from "./Slices/newsletterSclice"
import blogReducer from "./Slices/blogSlice"
import jobReducer from "./Slices/JobSlice"
import careerReducer from "./Slices/CareerSlice"
const reducer = combineReducers({
    newsLetterState: newsLetterReducer,
    blogState: blogReducer,
    jobState: jobReducer,
    careerState: careerReducer
})



const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export default store