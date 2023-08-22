import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid"; // needed for dayClick
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid blue",
  borderRadius:"6px",
  boxShadow: 24,
  p: 4,
};
const Calendar = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const[eventval,setEventval]=useState("");
  const[eventclick,setEventclick]=useState(false);
  const [eventd ,SetEventd]=useState([]);
  const[start,setStart]=useState("");
  const[end,setEnd]=useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //full calendar
const handleChange=(e)=>{
if(e.target.name=="eventval"){
  setEventval(e.target.value);
}

}
  //google calendar
  const CLIENT_ID =
    "879866954848-q74bil6cfhkogggmmt4p7l0cdepuc2kh.apps.googleusercontent.com";
  const API_KEY = "AIzaSyA5FO9UIjn0BU3PGIc3PkivvymBM5vLq-k";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [eventss, setEvents] = useState([]);
  useEffect(() => {
    let a = localStorage.getItem("events");
    if (a != null) {
      setEvents(JSON.parse(a));
    }
    let useremail = JSON.parse(localStorage.getItem("myprappuser")).email;

    let email = useremail.replace("@", "%40");
    setEmail(email);
  }, []);
  useEffect(() => {
    const gapiLoaded = () => {
      gapi.load("client", initializeGapiClient);
    };

    const gisLoaded = () => {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "", // defined later
      });
      // Update state to indicate Google Identity Services are initialized
      setGisInited(true);
    };

    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      // Update state to indicate Gapi client is initialized
      setGapiInited(true);
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
        callback: "", // defined later
      });
      tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw resp;
        }
        const signoutButton = document.getElementById("signout_button");
        if (signoutButton) {
          signoutButton.style.visibility = "visible";
        }
      await listUpcomingEvents();
      };

      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "", // defined later
      });
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      SetEventd([] );
    }
  };
  const listUpcomingEvents = async () => {
    let response;
    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      document.getElementById("content").innerText = err.message;
      return;
    }

    const events = response.result.items;
    if (!events || events.length == 0) {
      return;
    }
  SetEventd(events);
  };

  const handleSelect = async(info) => {
    const { start, end } = info;
    setOpen(true);
    setStart(start);
    setEnd(end);
  };
  const handleeventbuttonclick=(info)=>{
    const newEvent = {
      start,
      end,
      title: eventval,
      id: Math.floor(Math.random() * 1000),
    };
    const updatedEvents = [...eventss, newEvent];
    setEvents(updatedEvents);
 
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEventval("");
    setEventclick(true);
    setStart("");
    setEnd("");
    setOpen(false)
  }

  const RemoveCustomEvents = () => {
    let a = confirm("Are you sure you want to remove all events?");
    if (a) {
      setEvents([]);
      localStorage.removeItem("events");
    }
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
        <Head>
          <script async defer src="https://apis.google.com/js/api.js"></script>
          <script
            async
            defer
            src="https://accounts.google.com/gsi/client"
          ></script>
        </Head>
        <button
          className="p-2 bg-red-600 rounded text-white font-semibold m-2"
          onClick={RemoveCustomEvents}
        >
          Remove All Schedule
        </button>
        <div className="flex justify-center">
          <iframe
            src={`https://calendar.google.com/calendar/embed?src=${email}&ctz=Asia%2FKolkata`}
            style={{ border: "0" }}
            width="1000"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div>
          
<h1 className="my-6 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Fetch All Events From Google Calendar</h1>
<p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Sign in with Google to fetch all your event details from google calendar and add an event to google calendar</p>
<div className="flex justify-center">
<button type="button" onClick={handleAuthClick} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign in with Google
</button>
<button type="button" onClick={handleSignoutClick}className="mx-4 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign out
</button>
</div>
          {/* google script apperas here */}
        </div>
        {/* calendar modal starts feom here */}
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Event Start Date
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Event End Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Updated At
                </th>
            </tr>
        </thead>
        <tbody>
            {eventd.map((item)=>{return <tr className="border-b border-gray-200 dark:border-gray-700" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {item.summary}
                </th>
                <td className="px-6 py-4">
                   {new Date(item.start.dateTime).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: "numeric",minute: "numeric",second: "numeric",timeZoneName: "short", })}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {new Date(item.end.dateTime).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: "numeric",minute: "numeric",second: "numeric",timeZoneName: "short", })}
                </td>
                <td className="px-6 py-4">
                 {new Date(item.updated).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: "numeric",minute: "numeric",second: "numeric",timeZoneName: "short", })}
                </td>
            </tr>})}
        </tbody>
    </table>
</div>

        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h2"
                  component="h1"
                  className="font-bold"
                  margin="dense"
                >
                  Schedule Your Event
                </Typography>
                <TextField fullWidth label="Enter your event name" id="fullWidth" name="eventval" value={eventval} onChange={handleChange} margin="dense"/>
                <div className="flex items-center">
              <button className="text-white bg-blue-500 rounded p-2 my-2" onClick={handleeventbuttonclick}>
                Add Now
              </button>
              </div>
              </Box>
             
            </Fade>
          </Modal>
        </div>
      </FullLayout>
    </ThemeProvider>
  );
};
const EventItem = ({ info }) => {
  const { event } = info;

  return (
    <div>
      <p className="bg-blue-600 text-white font-bold p-2 w-full rounded-xl">
        {event.title}
      </p>
    </div>
  );
};

export default Calendar;
