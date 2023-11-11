import React from 'react';
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
const Texteditor = () => {
  return (
    <div>
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
       Text Editor
       </FullLayout>
      </ThemeProvider> 
    </div>
  )
}

export default Texteditor
