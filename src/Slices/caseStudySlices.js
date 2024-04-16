import { createSlice } from "@reduxjs/toolkit";

const caseStudySlice = createSlice({
  name: "caseStudy",
  initialState: {
    loading: false,
  },
  reducers: {
    AllcaseStudyLoading(state, action) {
      return {
        loading: true,
      };
    },
    AllcaseStudySuccess(state, action) {
      return {
        loading: false,
        allcaseStudy: action.payload.allCaseStudy,
      };
    },
    AllcaseStudyfail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    GetSinglecaseStudyLoading(state, action) {
      return {
        loading: true,
      };
    },
    GetSinglecaseStudySuccess(state, action) {
      return {
        loading: false,
        SinglecaseStudy: action.payload.CaseStudy,
      };
    },
    GetSinglecaseStudyfail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },

  },
});
const { actions, reducer } = caseStudySlice;

export const {
  AllcaseStudyLoading,
  AllcaseStudySuccess,
  AllcaseStudyfail,
  GetSinglecaseStudyLoading,
  GetSinglecaseStudySuccess,
  GetSinglecaseStudyfail,

} = actions;

export default reducer;
