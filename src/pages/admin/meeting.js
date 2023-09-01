/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useState } from 'react';
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router';
import { SiGooglemeet } from 'react-icons/si';
import { FiVideo } from 'react-icons/fi';
const Meeting = () => {
    const router = useRouter();
    const [ham, setham]= useState(false);
    const [nham, setnham]= useState(true);
    const [roomid, setRoomid]= useState(true);
    const [roomidinput, setRoomidinput]= useState('');
    const handleChange=(e)=>{
        if(e.target.name=='roomid'){
            setRoomidinput(e.target.value);
        }
    }
    const joinRoom=()=>{
        alert("TEMPORARAY DOWN");
                const getUrlParams = (url) => {
            let urlStr = url.split('?')[1];
            const urlSearchParams = new URLSearchParams(urlStr);
            const result = Object.fromEntries(urlSearchParams.entries());
            
            return result;
          };
      
          // Generate a Token by calling a method.
          // @param 1: appID
          // @param 2: serverSecret
          // @param 3: Room ID
          // @param 4: User ID
          // @param 5: Username
          const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
          const userID = Math.floor(Math.random() * 10000) + "";
          const userName = "userName" + userID;
          const appID = 1175383975;
          const serverSecret = "45da9492ceb8870cbaa2aee82255969d";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
      
          const zp = ZegoUIKitPrebuilt.create(kitToken);
          zp.joinRoom({
            container: document.querySelector("#root"),
            sharedLinks: [{
              name: 'Personal link',
              url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
            }],
            scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
             
            },
      
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            showTextChat: true,
            showUserList: true,
            maxUsers: 50,
            layout: "Sidebar",
            showLayoutButton: true,
            onLeaveRoom: () => {
                window.location.href="/admin/meeting";
              }
          });
          router.push( window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomidinput);
    }


    
 
  const GenrateMeeting=()=>{
    const getUrlParams = (url) => {
      let urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      const result = Object.fromEntries(urlSearchParams.entries());
      
      return result;
    };

    // Generate a Token by calling a method.
    // @param 1: appID
    // @param 2: serverSecret
    // @param 3: Room ID
    // @param 4: User ID
    // @param 5: Username
    const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = 1175383975;
    const serverSecret = "45da9492ceb8870cbaa2aee82255969d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: document.querySelector("#root"),
      sharedLinks: [{
        name: 'Personal link',
        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
       
      },

      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      maxUsers: 50,
      layout: "Sidebar",
      showLayoutButton: true,
      onJoinRoom: () => {
        router.push( window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID);
     },
      onLeaveRoom: () => {
        window.location.href="/admin/meeting";
      }
    });
    
}

   
 useEffect(() => {
  alert("TEMPORARAY DOWN")
    if(router.query.roomID){
        setnham(false);
        setham(true);
        const getUrlParams = (url) => {
            let urlStr = url.split('?')[1];
            const urlSearchParams = new URLSearchParams(urlStr);
            const result = Object.fromEntries(urlSearchParams.entries());
            
            return result;
          };
      
          // Generate a Token by calling a method.
          // @param 1: appID
          // @param 2: serverSecret
          // @param 3: Room ID
          // @param 4: User ID
          // @param 5: Username
          const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
          const userID = Math.floor(Math.random() * 10000) + "";
          const userName = "userName" + userID;
          const appID = 1175383975;
          const serverSecret = "45da9492ceb8870cbaa2aee82255969d";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
      
          const zp = ZegoUIKitPrebuilt.create(kitToken);
          zp.joinRoom({
            container: document.querySelector("#root"),
            sharedLinks: [{
              name: 'Personal link',
              url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
            }],
            scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
             
            },
      
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            showTextChat: true,
            showUserList: true,
            maxUsers: 50,
            layout: "Sidebar",
            showLayoutButton: true,
            onLeaveRoom: () => {
              window.location.href="/admin/meeting";
            }
          });
    }
 },[router.query.roomID])
 
  return (
    <ThemeProvider theme={theme}>
        
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
      
    {ham&&<div className=' flex justify-center items-center h-[100vh] '>
   
      <div id="root" className='h-[100vh] w-[100vw]'>
      
      </div>
     
    </div>}
    {nham&&<FullLayout>
        
    <div >
    <h1 className='font-bold text-white bg-blue-600 p-2 text-xl rounded flex items-center'><SiGooglemeet className='mx-1'/>Project Studio Meetings</h1>
   
    </div>
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unite & Collaborate: Empowering Seamless Group Meetings!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Premium video meetings now free for every one. Secure Meetings. Create one to one now, Group meeting ,Presentation and live chat etc.</p>
            <button onClick={GenrateMeeting} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">
                <FiVideo className='mx-2'/>Create New Meeting
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <input type="text" placeholder='Enter Your Room Id' className='my-4 mx-2 border-2 border-blue-600 rounded p-2 font-semibold' name='roomid' value={roomidinput} onChange={handleChange}/>
            <button  onClick ={joinRoom} className="my-0 inline-flex items-center justify-center px-5 py-3 mr-5 text-base font-medium text-center text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Join Now
            </button> 
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/video.jpg" alt="mockup"/>
        </div>                
    </div>
</section>
    
    </FullLayout>}
    {/* <script src="https://unpkg.com/@zegocloud/zego-uikit-prebuilt/zego-uikit-prebuilt.js"></script> */}
      </ThemeProvider> 
  );
};

export default Meeting;
