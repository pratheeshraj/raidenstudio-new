import axios from "axios"
import { jobRequest, jobSingleBlogFail, jobSingleBlogRequest, jobSingleBlogSuccess, jobSuccess, jobfail } from "../Slices/JobSlice"

const BASE_URL = "https://vraiden-backend.onrender.com/api";


export const GetAllJobs = async (dispatch) => {
    try {
        dispatch(jobRequest())
        const { data } = await axios.get(`${BASE_URL}/jobpost/getjobpost`, {
            withCredentials: true,
        })
        dispatch(jobSuccess(data))
    } catch (error) {
        if (error.message === "Network Error") {
            return dispatch(jobfail((error.message)))
        }
        dispatch(jobfail(error.response.data.message))
    }
}

export const GetSingleJobs = (id) => async (dispatch) => {
    console.log(id);
    try {
        dispatch(jobSingleBlogRequest())
        const { data } = await axios.get(`${BASE_URL}/jobpost/getsinglejobpost/${id}`)
        dispatch(jobSingleBlogSuccess(data))
        console.log(data);
    } catch (error) {
        if (error.message === "Network Error") {
            return dispatch(jobSingleBlogFail((error.message)))
        }
        dispatch(jobSingleBlogFail(error.response.data.message))
    }
}