import axios from "axios";
import { CreateCareerRequest, CreateCareerSuccess, CreateCareerfail } from "../Slices/CareerSlice";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api";

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
        dispatch(CreateCareerfail(error.response.data.message));
    }
};