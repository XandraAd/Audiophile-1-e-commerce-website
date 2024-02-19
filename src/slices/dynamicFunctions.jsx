import { createSlice } from "@reduxjs/toolkit";

const initialState={
    budget:[],
    searchQuery:"",
    madePayment:false,
    allPayments:0,

}

const dynamicFunctionSlice=createSlice({
name:"paymentData",
initialState,
reducers:{
    
    updateHasPaid:(state,action)=>{
        state.hasPaid=action.payload;
    },

    addItems:(state,action)=> {
        state.budget=[...state.budget,action.payload]
    },
    setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },

}})

export const {
    updateHasPaid,
    addItems,
    setSearchQuery,
    } = dynamicFunctionSlice.actions;
  
  export default dynamicFunctionSlice.reducer;







