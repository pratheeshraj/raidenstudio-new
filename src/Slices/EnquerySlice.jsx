import { createSlice } from "@reduxjs/toolkit";


const enquerySlices = createSlice({
    name: "enquery",
    initialState: {
        loading: false,
    },
    reducers: {
        enqueryRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        enquerySuccess(state, action) {
            return {
                ...state,
                loading: false,
                createenquery: action.payload.createenquery
            }
        },
        enqueryfail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

    }
})

const { actions, reducer } = enquerySlices;

export const { enqueryRequest, enquerySuccess, enqueryfail } = actions


export default reducer;