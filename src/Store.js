import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import newsLetterReducer from "./Slices/newsletterSclice"
import blogReducer from "./Slices/blogSlice"
const reducer = combineReducers({
    newsLetterState: newsLetterReducer,
    blogState: blogReducer
})



const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export default store