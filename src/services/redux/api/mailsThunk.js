import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const sentMailHandler = createAsyncThunk(
    "mail/sentMail",
    async function (mailDetails,{getState}){
        const email = getState().auth.currentUser?.email;
        try{
            const docRef = doc(db,`sentMails/${email}/mails/${mailDetails.id}`);
            await setDoc(docRef, {...mailDetails, read:true});
            return mailDetails;
        }catch(err){
            throw new Error(err);
        }
    }
)
export const recievedMailHandler = createAsyncThunk(
    "mail/recievedMail",
    async function (mailDetails){
        try{
            const docRef = doc(db,`recievedMail/${mailDetails.mail}/mails/${mailDetails.id}`);
            await setDoc(docRef, {...mailDetails, read:false});
        }catch(err){
            throw new Error(err);
        }
    }
)