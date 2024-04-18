import axios from "axios";
import { contactRequest, contactSuccess, contactfail } from "../Slices/ContactSlice";

const BASE_URL = "https://vraiden-backend.onrender.com/api";

export const createContact = (contactData) => async (dispatch) => {
    try {
        dispatch(contactRequest());
        const response = await axios.post(`${BASE_URL}/contact/newcontact`, contactData, { withCredentials: true });
        dispatch(contactSuccess(response.data.message));
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : "An error occurred";
        dispatch(contactfail(errorMessage));
    }
};
