import axios from "axios";
import { } from "../Slices/ContactSlice";
import { enqueryRequest, enquerySuccess, enqueryfail } from "../Slices/EnquerySlice";

// const BASE_URL = "https://vraiden-backend.onrender.com/api";

const BASE_URL = "http://localhost:4000/api";


export const enqueryContact = (enqueryData) => async (dispatch) => {
    try {
        dispatch(enqueryRequest());
        const response = await axios.post(`${BASE_URL}/enquery/newenquery`, enqueryData, { withCredentials: true });
        dispatch(enquerySuccess(response.data.message));
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : "An error occurred";
        if (error.message == "Network Error") {
            return dispatch(enqueryfail((error.message)))
        }
        dispatch(enqueryfail(errorMessage));
    }
};
