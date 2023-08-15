import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid' // needed for dayClick
const Calendar = () => {
const[email,setEmail]=useState("");
  //full calendar

    //google calendar
  const CLIENT_ID = '879866954848-q74bil6cfhkogggmmt4p7l0cdepuc2kh.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyA5FO9UIjn0BU3PGIc3PkivvymBM5vLq-k';
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
 const [eventss, setEvents] = useState([]);
 useEffect(()=>{
 let a = localStorage.getItem("events");
  if(a!=null){
      setEvents(JSON.parse(a));
  }
  let useremail = JSON.parse(localStorage.getItem("myprappuser")).email;

  let email= useremail.replace("@","%40");
  setEmail(email);
console.log(email);
 },[])
  useEffect(() => {
    const gapiLoaded = () => {
      gapi.load('client', initializeGapiClient);
    }

    const gisLoaded = () => {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      })
      // Update state to indicate Google Identity Services are initialized
      setGisInited(true);
      maybeEnableButtons(tokenClient);
    };

    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      // Update state to indicate Gapi client is initialized
      setGapiInited(true);
      maybeEnableButtons();
    };

    const maybeEnableButtons = (tokenClient) => {
      if (gapiInited && gisInited) {
        const authorizeButton = document.getElementById('authorize_button');
        const signoutButton = document.getElementById('signout_button');
        if (authorizeButton && signoutButton) {
          authorizeButton.style.visibility = 'visible';
        }
      }
    };

    // Call the functions to initialize Google API and Google Identity Services
    gapiLoaded();
    gisLoaded();
  }, [gapiInited, gisInited]);

  const handleAuthClick = async () => {
    if (gapi.client.getToken() === null) {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });

      tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw (resp);
        }
        const signoutButton = document.getElementById('signout_button');
        if (signoutButton) {
          signoutButton.style.visibility = 'visible';
        }
        await listUpcomingEvents();
      };

      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      const contentElement = document.getElementById('content');
      const authorizeButton = document.getElementById('authorize_button');
      const signoutButton = document.getElementById('signout_button');
      if (contentElement && authorizeButton && signoutButton) {
        contentElement.innerText = '';
        authorizeButton.innerText = 'Authorize';
        signoutButton.style.visibility = 'hidden';
      }
    }
  };
  const listUpcomingEvents = async () => {
    let response;
        try {
          const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
        } catch (err) {
          document.getElementById('content').innerText = err.message;
          return;
        }

        const events = response.result.items;
        if (!events || events.length == 0) {
          document.getElementById('content').innerText = 'No events found.';
          return;
        }
      // console.log(events[0].start.dateTime.toLocaleDateString("en-IN", options))
        // Flatten to string to display
        const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
        const output = events.reduce(

            (str, event) => `${str}${event.summary} :- (${new Date(event.start.dateTime).toLocaleString('en-IN', options) || event.start.date})\n`,
            'Events:\n');
        document.getElementById('content').innerText = output;
  };
     
    const handleSelect = (info) => {
  const { start, end } = info;
  const eventNamePrompt = prompt("Enter event name");
  
  if (eventNamePrompt) {
    const newEvent = {
      start,
      end,
      title: eventNamePrompt,
      id: Math.floor(Math.random() * 1000),
    };

    const updatedEvents = [...eventss, newEvent];
    setEvents(updatedEvents);
    
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }
};

  const RemoveCustomEvents = () => {

    let a = confirm("Are you sure you want to remove all events?");
    if(a){
          setEvents([]);
          localStorage.removeItem("events");
  }
    }
    
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
      <FullCalendar
  editable
  selectable
  events={eventss}
  select={handleSelect}
  headerToolbar={{
    start: "today prev next",
    end: "dayGridMonth dayGridWeek dayGridDay",
  }}
  eventContent={(info) => <EventItem info={info} />}
  plugins={[daygridPlugin, interactionPlugin]}
  views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
/>
<button className='p-2 bg-red-600 rounded text-white font-semibold m-2' onClick={RemoveCustomEvents}>Remove All Schedule</button>
<div>
  <iframe src={`https://calendar.google.com/calendar/embed?src=${email}&ctz=Asia%2FKolkata`} style={{border:"0"}} width="1000" height="600" frameBorder="0" scrolling="no"></iframe>
</div>

<div>
      <button id="authorize_button" onClick={handleAuthClick}>Sign in with</button>
    <button id="signout_button" onClick={handleSignoutClick}>Sign Out</button>

    <div className='bg-blue-200 p-2 text-white m-2 font-bold rounded-lg'>
      <div id="content" className='bg-blue-600 p-4 text-white m-2 font-bold rounded-3xl shadow-2xl'></div>
    </div>
  <script async defer src="https://apis.google.com/js/api.js"></script>
    <script async defer src="https://accounts.google.com/gsi/client"></script>
</div>
      </FullLayout>
    </ThemeProvider>
  );
};
const EventItem = ({ info }) => {

    const { event } = info;

    return (
        <div>
 <p className='bg-blue-600 text-white font-bold p-2 w-full'>{event.title}</p>
        </div>
       
   
    );
  };
  

export default Calendar;
