import React, { useEffect, useRef,useState } from "react";
// import Quill from "quill";
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import parse from 'html-react-parser';
import { ThemeProvider } from "@mui/material/styles";
import { set } from "mongoose";
// import "quill/dist/quill.snow.css";
// import { io } from "socket.io-client";

const Texteditor = () => {
const [Data, setData] = useState("");
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })


  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' },{ font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]
    const [value, setValue] = useState('');
    const handleTextChange = (content, delta, source, editor) => {
        // Update the value state with the HTML content of the editor
        setValue(delta);
      };
  return (
    
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
        .Navbar {
          display: none;
        }
      `}</style>
      <FullLayout>
      <div>
      <QuillNoSSRWrapper modules={modules} placeholder='Enter Your Text Here ...' value={value} formats={formats} theme="snow" className="h-[70vh]"/>
      </div>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Texteditor;
