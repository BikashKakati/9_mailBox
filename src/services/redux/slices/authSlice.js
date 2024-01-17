import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../api/logThunk";
import { toast } from "react-hot-toast";
const LOCAL_STORAGE_KEY = "USER_DATA";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        currentUser:JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null,
    },
    reducers:{
        logout:(state)=>{
            state.currentUser = null;
            localStorage.setItem(LOCAL_STORAGE_KEY, null);
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(logIn.pending,(state,action)=>{
            toast.loading("loading...");
        }).addCase(logIn.fulfilled,(state,action)=>{
            state.currentUser = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
            toast.remove();
            toast.success("log in successfully!");
        }).addCase(logIn.rejected,(state,action)=>{
            toast.remove();
            toast.error("email/password invalid");
        })
    }
})
export const {logout} = authSlice.actions;
export default authSlice.reducer;