import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
const ProfileDD = () => {
  const[name,setName]=useState('');
  const [img ,setImg]=useState('');
const router = useRouter();
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("myprappuser"));
    if(data&&data.token){
      Getuserdata(data.token);
    }
    
  },[])
  const logout=()=>{
    localStorage.removeItem("myprappuser");
    toast.success("Logout Successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      router.push("/login")
  }
  const Getuserdata=async(token)=>{
    const data={token:token}
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response=await res.json();
    console.log(response);
    setName(response.name);
    setImg(response.img);
  }
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <img
            src={`${img}`}
            alt={"user image"}
            width="35"
            height="35"
            className="rounded-3xl"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {name}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
        <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <Link href="/admin/editprofile"  style={{ textDecoration: "none", color: "inherit" }}><ListItemButton>
                <ListItemText primary="Edit Profile" />
              </ListItemButton></Link>
              <Link href="/admin/changepassword"  style={{ textDecoration: "none", color: "inherit" }}><ListItemButton >
                <ListItemText primary="Change Password" />
              </ListItemButton></Link>
              <Link href="/admin/query"  style={{ textDecoration: "none", color: "inherit" }}><ListItemButton >
                <ListItemText primary="Raise A Query" />
              </ListItemButton></Link>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link to="/">
              <button onClick={logout} className="bg-blue-600 text-white p-2 rounded w-full font-semibold hover:bg-blue-800">
                Logout
              </button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
