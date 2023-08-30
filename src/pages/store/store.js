import { configureStore } from "@reduxjs/toolkit";
import userdata from "./userdata";
export const store = configureStore({
    reducer: {
        userdata: userdata,
    },
});
