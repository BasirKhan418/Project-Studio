import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
      {/* <Image src={LogoDark} alt={LogoDark} /> */}
      <h1 className="text-blue-600 text-2xl bg-white font-extrabold ">Project Studio</h1>
    </Link>
  );
};

export default LogoIcon;
