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
import axios from "axios";

const BASE_URL = "https://vraiden-backend.onrender.com/api";

export const AllcaseStudys = (keyword,category) => async (dispatch) => {
  console.log(keyword,category);
  try {
    dispatch(AllcaseStudyLoading());
    if (category) {
      const { data } = await axios.get(
        `${BASE_URL}/case-study/get_casestudy?keyword=${keyword}${
          category ? `&category=${category}` : ""
        }`,
        {
          withCredentials: true,
        }
      );
      return dispatch(AllcaseStudySuccess(data));
    }
    const { data } = await axios.get(
      `${BASE_URL}/case-study/get_casestudy?keyword=${keyword}`,
      {
        withCredentials: true,
      }
    );
    dispatch(AllcaseStudySuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(AllcaseStudyfail(error.message));
    }
    dispatch(AllcaseStudyfail(error.response.data.message));
  }
};

export const getSinglecaseStudys = (url) => async (dispatch) => {
  console.log(url);
  try {
    dispatch(GetSinglecaseStudyLoading());
    const { data } = await axios.get(
      `${BASE_URL}/case-study/get_single_casestudy/${url}`,
      { withCredentials: true }
    );
    dispatch(GetSinglecaseStudySuccess(data));
  } catch (error) {
    dispatch(GetSinglecaseStudyfail(error.response.data.message));
  }
};
