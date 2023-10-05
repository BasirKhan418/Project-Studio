import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

          .hero-text {
            font-family: "Dela Gothic One", cursive;
            font-family: "Lato", sans-serif;
            font-family: "Martel Sans", sans-serif;
            font-family: "Poppins", sans-serif;
            font-family: "Ubuntu", sans-serif;
          }
        `}</style>
      {/* <Image src={LogoDark} alt={LogoDark} /> */}
      <h1 className="text-center no-underline bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-2xl font-extrabold ">Project Studio</h1>
    </Link>
  );
};

export default LogoIcon;
