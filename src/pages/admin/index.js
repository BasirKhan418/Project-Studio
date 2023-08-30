/* eslint-disable @next/next/no-sync-scripts */
import { Grid } from "@mui/material";
import BlogCard from "../../../trc/components/dashboard/BlogCard";
import SalesOverview from "../../../trc/components/dashboard/SalesOverview";
import DailyActivity from "../../../trc/components/dashboard/DailyActivity";
import ProductPerfomance from "../../../trc/components/dashboard/ProductPerfomance";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../admin/Card";
import { fetchUser } from "../store/userdata";
import { useDispatch,useSelector } from 'react-redux';
import Head from "next/head";
export default function Index() {
const dispatch = useDispatch();
  const router= useRouter();
  useEffect(()=>{
    const myprappuser = JSON.parse(localStorage.getItem('myprappuser'))
  dispatch(fetchUser(myprappuser.token));   
},[])
const selector = useSelector((state) => state.userdata);
console.log("ss",selector);
const getuser=async(token)=>{
    const data ={token:token};
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await pr.json();
    setId(res._id);
    console.log(res._id);
}
  return (
    <ThemeProvider theme={theme}>
       <Head>
      <title>Admin Panel - Ps App</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
      <script src="https://unpkg.com/@zegocloud/zego-uikit-prebuilt/zego-uikit-prebuilt.js"></script>
     </Head>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <Card/>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
    
  );
}

