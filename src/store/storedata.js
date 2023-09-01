import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userdata from "./userdata";
const storedata = configureStore({
    reducer: {
        userdata: userdata,
    },
});
export default storedata;