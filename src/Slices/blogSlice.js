import { createSlice } from "@reduxjs/toolkit";

const blogSlices = createSlice({
  name: "blog",
  initialState: {
    loading: false,
  },
  reducers: {
    blogRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    blogSuccess(state, action) {
      return {
        ...state,
        loading: false,
        allBlogs: action.payload.allBlog,
      };
    },
    blogFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    recentBlogRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    recentBlogSuccess(state, action) {
      return {
        ...state,
        loading: false,
        recentBlogs: action.payload.recentBlog,
      };
    },
    recentBlogFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    BlogcategoryRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    BlogcategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        Blogcategory: action.payload.category,
      };
    },
    BlogcategoryFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    BlogTagRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    BlogTagSuccess(state, action) {
      return {
        ...state,
        loading: false,
        tags: action.payload.tags,
      };
    },
    BlogTagFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    getBlogByTagRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getBlogByTagSuccess(state, action) {
      return {
        ...state,
        loading: false,
        blogByTag: action.payload.BlogByTag,
      };
    },
    getBlogByTagFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    GetBlogDetailsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    GetBlogDetailsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        BlogDetails: action.payload.singleBlog[0],
      };
    },
    GetBlogDetailsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    GetBlogByCategoryRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    GetBlogByCategorSuccess(state, action) {
      return {
        ...state,
        loading: false,
        BlogByCategory: action.payload.BlogByCategory,
      };
    },
    GetBlogByCategorFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = blogSlices;
export const {
  blogFail,
  blogRequest,
  blogSuccess,
  recentBlogFail,
  recentBlogSuccess,
  recentBlogRequest,
  BlogcategoryFail,
  BlogcategoryRequest,
  BlogcategorySuccess,
  GetBlogDetailsFail,
  GetBlogDetailsRequest,
  GetBlogDetailsSuccess, 
  GetBlogByCategorFail,
  GetBlogByCategoryRequest,
  GetBlogByCategorSuccess,
  BlogTagSuccess,
  BlogTagFail,
  BlogTagRequest,
  getBlogByTagFail,getBlogByTagRequest,getBlogByTagSuccess
} = actions;

export default reducer;
