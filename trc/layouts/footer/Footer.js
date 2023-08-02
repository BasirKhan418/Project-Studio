import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <p className=" text-black font-semibold p-2  w-full">
        <span className="text-blue-600 font-bold">© </span>2023 All rights reserved by <span className="text-blue-600 font-bold">Projectstudio.com</span>{" "}
      {" "}
      </p>
    </Box>
  );
};

export default Footer;
