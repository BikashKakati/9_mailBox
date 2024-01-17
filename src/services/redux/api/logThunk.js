import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config";

export const logIn = createAsyncThunk(
    "auth/logIn",
    async function (userData){
        try{
            const {user} = await signInWithEmailAndPassword(auth,userData.email, userData.password);
            return {email:user.email, uid:user.uid};
        }catch(err){
            throw new Error();
        }
    }
)
