import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userdata from "./userdata";
const Storedetails = configureStore({
    reducer: {
        userdata: userdata,
    },
});
export default Storedetails;