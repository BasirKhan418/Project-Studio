import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userdata from "./userdata";
const Storedata = configureStore({
    reducer: {
        userdata: userdata,
    },
});
export default Storedata;