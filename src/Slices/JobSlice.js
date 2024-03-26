import { createSlice } from "@reduxjs/toolkit";


const JobSlices = createSlice({
    name: "jobpost",
    initialState: {
        loading: false,
    },
    reducers: {
        jobRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        jobSuccess(state, action) {
            return {
                ...state,
                loading: false,
                allJobPost: action.payload.allJobPost
            }
        },
        jobfail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        jobSingleBlogRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        }, jobSingleBlogSuccess(state, action) {
            return {
                ...state,
                loading: false,
                singlejobpost: action.payload.singlejobpost
            }
        }, jobSingleBlogFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        }
    }
})

const { actions, reducer } = JobSlices;

export const { jobRequest, jobSuccess, jobfail, jobSingleBlogRequest, jobSingleBlogSuccess, jobSingleBlogFail } = actions


export default reducer;