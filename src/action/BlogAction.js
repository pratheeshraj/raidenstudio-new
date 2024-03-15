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
} from "../Slices/blogSlice";

export const GetAllBlogs = async (dispatch) => {
  try {
    dispatch(blogRequest());
    const { data } = await axios.get(`http://localhost:4000/api/blog/allblog`, {
      withCredentials: true,
    });
    dispatch(blogSuccess(data));
  } catch (error) {
    dispatch(blogFail(error.response.data.message));
  }
};

export const GetRecentBlogs = async (dispatch) => {
  try {
    dispatch(recentBlogRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/blog/recent-allblog`,
      { withCredentials: true }
    );
    dispatch(recentBlogSuccess(data));
  } catch (error) {
    dispatch(recentBlogFail(error.response.data.message));
  }
};

export const GetBlogsCategory = async (dispatch) => {
  try {
    dispatch(BlogcategoryRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/blog/get-category`,
      { withCredentials: true }
    );
    dispatch(BlogcategorySuccess(data));
  } catch (error) {
    dispatch(BlogcategoryFail(error.response.data.message));
  }
};

export const GetBlogDetails = (url) => async (dispatch) => {
  try {
    dispatch(GetBlogDetailsRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/blog/single-blogs/${url}`,
      { withCredentials: true }
    );
    console.log(data);
    dispatch(GetBlogDetailsSuccess(data));
  } catch (error) {
    dispatch(GetBlogDetailsFail(error.response.data.message));
  }
};

export const GetBlogByCategory = (category) => async (dispatch) => {
    try {
      dispatch(GetBlogByCategoryRequest());
      const { data } = await axios.get(
        `http://localhost:4000/api/blog/get-blogby-category/${category}`,
        { withCredentials: true }
      );
      console.log(data);
      dispatch(GetBlogByCategorSuccess(data));
    } catch (error) {
      dispatch(GetBlogByCategorFail(error.response.data.message));
    }
  };