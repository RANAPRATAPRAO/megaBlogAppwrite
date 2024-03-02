import { createSlice } from "@reduxjs/toolkit";

const inintialState={
    status: false,
    userData:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,

    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
            //here we take user data from the store we have created
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
export const{login,logout}=authSlice.action;

export default authSlice.reducer;