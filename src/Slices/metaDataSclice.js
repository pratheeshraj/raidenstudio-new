import { createSlice } from "@reduxjs/toolkit";

const metadataSclice = createSlice({
  name: "metadata",
  initialState: {
    loading: false,
  },
  reducers: {

    getAllMetadataRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getAllMetadataSuccess(state, action) {
      return {
        ...state,
        loading: false,
        allMetaData: action.payload.getAll,
      };
    },
    getAllMetadataFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = metadataSclice;

export const {
  getAllMetadataFailure,
  getAllMetadataRequest,
  getAllMetadataSuccess,
} = actions;

export default reducer;
