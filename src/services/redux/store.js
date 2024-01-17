import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import mailsSlice from "./slices/mailsSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        mail:mailsSlice,
    }
})
