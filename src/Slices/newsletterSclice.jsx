import { createSlice } from "@reduxjs/toolkit";

 const newsLetterSclice= createSlice({
    name:"newsLetter",
    initialState:{
        loading: false,
    },
    reducers:{
        newLetterEmailRequest(state,action){
            return{
                ...state,
                loading: true,
            }
        },
        newLetterEmailSuccess(state,action){
            return{
                ...state,
                loading: false,
                success:action.payload
            }
        },
        newLetterEmailFail(state,action){
            return{
                ...state,
                loading: false,
                error:action.payload
            }
        },
        clearError(state, action) {
            return {
              ...state,
              error: null,
              success:null
            };
          },
    }
 })


 const {actions,reducer}=newsLetterSclice

export const {newLetterEmailRequest,newLetterEmailSuccess,newLetterEmailFail,clearError}=actions

export default reducer