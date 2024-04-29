import axios from "axios";
import { getAllMetadataFailure, getAllMetadataRequest, getAllMetadataSuccess } from "../Slices/metaDataSclice";
const baseurl = "http://localhost:4000/api";


export const getMetaDataCreate = async (dispatch) => {
  try {
    dispatch(getAllMetadataRequest());
    const { data } = await axios.get(`${baseurl}/meta-data/Getmetadata`);
    dispatch(getAllMetadataSuccess(data));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(blogFail((error.message)))
    }
    dispatch(getAllMetadataFailure(error.response.data.message));
  }
};



