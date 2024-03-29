import { createSlice } from "@reduxjs/toolkit";


const ContactSlices = createSlice({
    name: "jobpost",
    initialState: {
        loading: false,
    },
    reducers: {
        contactRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        contactSuccess(state, action) {
            return {
                ...state,
                loading: false,
                createconatct: action.payload.createconatct
            }
        },
        contactfail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

    }
})

const { actions, reducer } = ContactSlices;

export const { contactRequest, contactSuccess, contactfail } = actions


export default reducer;