"use client";

import '@livekit/components-styles';
import { useTracks } from '@livekit/components-react';
import { Track } from 'livekit-client';
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
} from '@livekit/components-react';
import { useEffect, useState } from 'react';
import { RoomAudioRenderer } from '@livekit/components-react';
import { ControlBar } from '@livekit/components-react';
import { useRouter } from 'next/router';
export default function Page() {
   const router = useRouter();
  // TODO: get user input for room and name
  const[room,setRoom]=useState("");
  const [name, setName]=useState("");
if(room==""||name==""){
  setRoom(router.query.roomid);
  setName(router.query.name);
}

  const [token, setToken] = useState("");
  
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/meeting?room=${room}&&username=${name}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }
  
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] overflow-x-hidden'>
       <style jsx global>{`
        .footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      onDisconnected={()=>{
        router.push('/admin/meeting')}}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: '100dvh' }}
      
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
    </div>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  const[click,setClick]=useState(false);
  return (
    <div className='flex justify-center items-center'>
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height)) ', width:'80vw'}}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
    </div>
  );
}