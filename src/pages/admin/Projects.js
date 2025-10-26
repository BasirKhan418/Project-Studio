import React, { useEffect } from 'react'
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";


const Projects = () => {
   useEffect(() => {
    window.open("https://mbpaf8pcar8dm.pit-1.try.coder.app/workspaces", "_blank");
  }, []);
  return (
      <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
        .footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
        <p>Redirecting...</p>
       </FullLayout>
      </ThemeProvider> 
 
  )
}

export default Projects
