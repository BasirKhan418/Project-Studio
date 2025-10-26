import React, { useState, useEffect } from "react";
import { ThemeProvider, Box, Button, Container, Typography, Stack, Paper } from "@mui/material";
import dynamic from "next/dynamic";
import FullLayout from "../../../trc/layouts/FullLayout";
import theme from "../../../trc/theme/theme";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";


// Dynamically import ReactQuill for client-only rendering
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Texteditor = () => {
  const [value, setValue] = useState("");

  // Load saved content from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("editorContent");
    if (saved) setValue(saved);
  }, []);

  // Save content to localStorage
  useEffect(() => {
    localStorage.setItem("editorContent", value);
  }, [value]);

  // Download as TXT
  const handleDownloadTXT = () => {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "document.txt");
  };

  // Download as DOCX
  const handleDownloadDOCX = () => {
  const content = `
    <html>
      <head><meta charset="utf-8"></head>
      <body>${value}</body>
    </html>
  `;
  const blob = htmlDocx.asBlob(content);
  saveAs(blob, "document.docx");
};

  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <Container maxWidth="md" sx={{ mt: 5, mb: 5, position: "relative", zIndex: 10 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Project Studio Rich Text Editor
          </Typography>

          <Paper
            elevation={4}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 2,
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              style={{ minHeight: "250px" }}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="flex-end"
              sx={{ mt: 2 }}
            >
              <Button  color="primary" onClick={handleDownloadTXT}>
                Download TXT
              </Button>
              <Button  color="secondary" onClick={handleDownloadDOCX}>
                Download DOCX
              </Button>
            </Stack>
          </Paper>
        </Container>

        {/* Hide site elements */}
        <style jsx global>{`
          .footer {
            display: none !important;
          }
          .Navbar {
            display: none !important;
          }
        `}</style>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Texteditor;
