import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const sentMailHandler = createAsyncThunk(
    "mail/sentMail",
    async function (mailDetails, { getState }) {
        const userEmail = getState().auth.currentUser?.email;
        try {
            const docRef = doc(db, `sentMails/${userEmail}/mails/${mailDetails.id}`);
            await setDoc(docRef, { ...mailDetails, read: true});
            return mailDetails;
        } catch (err) {
            throw new Error(err);
        }
    }
)
export const recievedMailHandler = createAsyncThunk(
    "mail/recievedMail",
    async function (mailDetails) {
        try {
            const docRef = doc(db, `recievedMail/${mailDetails.to}/mails/${mailDetails.id}`);
            await setDoc(docRef, { ...mailDetails, read: mailDetails.read?true:false });
        } catch (err) {
            throw new Error(err);
        }
    }
)
export const getSentMails = createAsyncThunk(
    "expense/getExpenseData",
    async function (_, { getState }) {
        let details = [];
        const userEmail = getState()?.auth?.currentUser?.email;
        try {
            const docRef = collection(db, `sentMails/${userEmail}/mails`);
            const storageData = await getDocs(docRef);
            storageData?.forEach(doc => {details.push(doc?.data())})
            return details;
        } catch (err) {
            throw new Error(err.message);
        }
    }
)