import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import newsLetterReducer from "./Slices/newsletterSclice"
import blogReducer from "./Slices/blogSlice"
import jobReducer from "./Slices/JobSlice"
import careerReducer from "./Slices/CareerSlice"
import contactReducer from "./Slices/ContactSlice"
import caseStudyReducer from "./Slices/caseStudySlices"
const reducer = combineReducers({
    newsLetterState: newsLetterReducer,
    blogState: blogReducer,
    jobState: jobReducer,
    careerState: careerReducer,
    contactState: contactReducer,
    caseStudyState: caseStudyReducer

})



const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export default store