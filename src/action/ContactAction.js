import axios from "axios"
import { contactRequest, contactSuccess, contactfail } from "../Slices/ContactSlice";

const BASE_URL = "http://localhost:4000/api";

export const createContact = (contactData) => async (dispatch) => {
    try {
        dispatch(contactRequest());
        const { data } = await axios.post(`${BASE_URL}/contact/newcontact`, contactData, { withCredentials: true });
        dispatch(contactSuccess(data.message));
    } catch (error) {
        dispatch(contactfail(error.response.data.message));
    }
};