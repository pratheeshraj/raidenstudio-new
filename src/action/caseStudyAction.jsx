
import {
    AllcaseStudyLoading,
  AllcaseStudySuccess,
  AllcaseStudyfail,
  GetSinglecaseStudyLoading,
  GetSinglecaseStudySuccess,
  GetSinglecaseStudyfail,
  caseStudyCreateLoading,
  caseStudyCreateSuccess,
  caseStudyCreatefail,
} from "../Slices/caseStudySlices";
import axios from "axios"

const BASE_URL = "http://localhost:4000/api";



export const AllcaseStudys = async (dispatch) => {
    try {
        dispatch(AllcaseStudyLoading())
        const { data } = await axios.get(`${BASE_URL}/case-study/get_casestudy`,  { withCredentials: true })
        dispatch(AllcaseStudySuccess(data))
    } catch (error) {
        dispatch(AllcaseStudyfail(error.response.data.message))
    }
}

export const getSinglecaseStudys =(url)=> async (dispatch) => {
  console.log(url);
  try {
      dispatch(GetSinglecaseStudyLoading())
      const { data } = await axios.get(`${BASE_URL}/case-study/get_single_casestudy/${url}`,  { withCredentials: true })
      dispatch(GetSinglecaseStudySuccess(data))
  } catch (error) {
      dispatch(GetSinglecaseStudyfail(error.response.data.message))
  }
}

