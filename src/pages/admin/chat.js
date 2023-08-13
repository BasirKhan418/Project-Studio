import React from 'react'
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { ChatApp } from "mirrorfly-uikit/dist"
import "mirrorfly-uikit/dist/assets/scss/bundle.css"
const Chats = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
       <div className='h-full w-full'>
       <ChatApp
         licenseKey="gk66cyFBCPJWR6cVoBmv3SDhfDXDf6"
         userIdentifier="Basir418"
         apiUrl ="https://api-preprod-sandbox.mirrorfly.com/api/v1"
         isSandBox={true} // if you are a sandbox user it is true
      />
     </div>
        </FullLayout>
      </ThemeProvider> 
      </>
  )
}

export default Chats