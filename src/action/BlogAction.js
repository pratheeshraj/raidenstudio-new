import axios from "axios";
import {
  blogFail,
  blogRequest,
  blogSuccess,
  recentBlogFail,
  BlogcategoryFail,
  BlogcategoryRequest,
  BlogcategorySuccess,
  recentBlogRequest,
  recentBlogSuccess,
  GetBlogDetailsRequest,
  GetBlogDetailsSuccess,
  GetBlogDetailsFail,
  GetBlogByCategoryRequest,
  GetBlogByCategorSuccess,
  GetBlogByCategorFail,
  BlogTagRequest,
  BlogTagSuccess,
  BlogTagFail,
  getBlogByTagRequest,
  getBlogByTagSuccess,
  getBlogByTagFail,
} from "../Slices/blogSlice";
const BASE_URL = "https://vraiden-backend.onrender.com/api";
export const GetAllBlogs = async (dispatch) => {
  try {
    dispatch(blogRequest());
    const { data } = await axios.get(`${BASE_URL}/blog/allblog`, {
      withCredentials: true,
    });
    dispatch(blogSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(blogFail(error.response.data.message));
  }
};

export const GetRecentBlogs = async (dispatch) => {
  try {
    dispatch(recentBlogRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/recent-allblog`,
      { withCredentials: true }
    );
    dispatch(recentBlogSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(recentBlogFail(error.response.data.message));
  }
};

export const GetBlogsCategory = async (dispatch) => {
  try {
    dispatch(BlogcategoryRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/get-category`,
      { withCredentials: true }
    );
    dispatch(BlogcategorySuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(BlogcategoryFail(error.response.data.message));
  }
};
export const GetBlogsTags = async (dispatch) => {
  try {
    dispatch(BlogTagRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/all-tags`,
      { withCredentials: true }
    );
    dispatch(BlogTagSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(BlogTagFail(error.response.data.message));
  }
};
export const GetBlogDetails = (url) => async (dispatch) => {
  try {
    dispatch(GetBlogDetailsRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/single-blogs/${url}`,
      { withCredentials: true }
    );
    console.log(data);
    dispatch(GetBlogDetailsSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(GetBlogDetailsFail(error.response.data.message));
  }
};

export const GetBlogByCategory = (category) => async (dispatch) => {
  try {
    dispatch(GetBlogByCategoryRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/get-blogby-category/${category}`,
      { withCredentials: true }
    );
    console.log(data);
    dispatch(GetBlogByCategorSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(GetBlogByCategorFail(error.response.data.message));
  }
};

export const GetBlogByTag = (tag) => async (dispatch) => {
  try {
    dispatch(getBlogByTagRequest());
    const { data } = await axios.get(
      `${BASE_URL}/blog/get-blogby-tags/${tag}`,
      { withCredentials: true }
    );
    console.log(data);
    dispatch(getBlogByTagSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(getBlogByTagFail(error.response.data.message));
  }
};