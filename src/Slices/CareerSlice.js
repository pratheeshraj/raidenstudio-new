import { createSlice } from "@reduxjs/toolkit";


const CareerSlices = createSlice({
    name: "career",
    initialState: {
        loading: false,
    },
    reducers: {
        CareerRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        CareerSuccess(state, action) {
            return {
                ...state,
                loading: false,
                allcareer: action.payload
            }
        },
        Careerfail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        CreateCareerRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        CreateCareerSuccess(state, action) {
            return {
                ...state,
                loading: false,
                createcareer: action.payload.createcareer
            }
        },
        CreateCareerfail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
    }
})

const { actions, reducer } = CareerSlices;

export const { CareerRequest, CareerSuccess, Careerfail, CreateCareerRequest, CreateCareerSuccess, CreateCareerfail } = actions


export default reducer;