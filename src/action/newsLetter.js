import axios from "axios";
import {
  clearError,
  newLetterEmailFail,
  newLetterEmailRequest,
  newLetterEmailSuccess,
} from "../Slices/newsletterSclice";

import toast, { Toaster } from "react-hot-toast";

const BASE_URL = "https://vraiden-backend.onrender.com/api";

export const NewsLetterGetEmail = (email) => async (dispatch) => {
  console.log(email);
  try {
    dispatch(newLetterEmailRequest());
    const { data } = await axios.post(
      `${BASE_URL}/get-user-email`,
      { email },
      { withCredentials: true }
    );
    dispatch(newLetterEmailSuccess(data.message));
  } catch (error) {
    if (error.message == "Network Error") {
      return dispatch(newLetterEmailFail((error.message)))
    }
    dispatch(newLetterEmailFail(error.response.data.message));
  }
};

export const clearAuthError = (dispatch) => {
  dispatch(clearError());
};