import axios from "axios";
import { CreateCareerRequest, CreateCareerSuccess, CreateCareerfail } from "../Slices/CareerSlice";
import toast from "react-hot-toast";

const BASE_URL = "https://vraiden-backend.onrender.com/api";

export const CreateCareer = (career) => async (dispatch) => {
    try {
        dispatch(CreateCareerRequest());
        const { data } = await axios.post(
            `${BASE_URL}/career/newcareer`, career,
            { withCredentials: true }
        );
        dispatch(CreateCareerSuccess(data.message));
        toast.success('Successfully created!');
    } catch (error) {
        if (error.message == "Network Error") {
            return dispatch(CreateCareerfail((error.message)))
          }
        dispatch(CreateCareerfail(error.response.data.message));
    }
};