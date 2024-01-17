import { createSlice } from "@reduxjs/toolkit";
import { sentMailHandler } from "../api/mailsThunk";
import { toast } from "react-hot-toast";

const mailsSlice = createSlice({
    name:"mail",
    initialState:{
        sentMails:[],
        recievedMails:[],
    },
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(sentMailHandler.pending,(state) =>{
            toast.loading("loading...");
        }).addCase(sentMailHandler.fulfilled,(state,action) =>{
            state.sentMails.push(action.payload);
        }).addCase(sentMailHandler.rejected,(state) =>{
            toast.remove();
            toast.error("something went wrong!");
        })
    }
})
export default mailsSlice.reducer;