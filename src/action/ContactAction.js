import axios from "axios";
import { contactRequest, contactSuccess, contactfail } from "../Slices/ContactSlice";

// const BASE_URL = "https://vraiden-backend.onrender.com/api";

const BASE_URL = "http://localhost:4000/api";


export const createContact = (contactData) => async (dispatch) => {
    try {
        dispatch(contactRequest());
        const response = await axios.post(`${BASE_URL}/contact/newcontact`, contactData, { withCredentials: true });
        dispatch(contactSuccess(response.data.message));
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : "An error occurred";
        if (error.message == "Network Error") {
            return dispatch(contactfail((error.message)))
        }
        dispatch(contactfail(errorMessage));
    }
};
