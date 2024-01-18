import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { getSentMails, sentMailHandler } from "../api/mailsThunk";

const mailsSlice = createSlice({
    name:"mail",
    initialState:{
        sentMails:[],
        recievedMails:[],
        unreadMail:0,
    },
    reducers:{
        getRecievedMail:(state,action)=>{
            state.recievedMails = action.payload;
            state.unreadMail = action.payload.reduce((initial,curr)=> {
                if(!curr.read){
                    return initial + 1;
                }else{
                    return initial;
                }
            },0)
        }
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

        builder.addCase(getSentMails.fulfilled,(state,action) =>{
            state.sentMails = action.payload;
        })
    }
})
export const {getRecievedMail} = mailsSlice.actions;
export default mailsSlice.reducer;