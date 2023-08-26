import React, { useEffect, useState } from 'react'
import { useMyContext } from '../../context/Allstate';
import theme from "../../../trc/theme/theme";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import FullLayout from "../../../trc/layouts/FullLayout";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaListUl } from 'react-icons/fa';
import { ThemeProvider } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
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
const Todo = () => {
  const {id,setId}=useMyContext();
  const[tododata,settodo]=useState('');
  const[alltodos,setalltodos]=useState([]);
  const[User,setUser]=useState([]);
  const[edittitle,setEdittitle]=useState('');
  const [open, setOpen] = useState(false);
  const[editid,seteditid]=useState('');
  const[delid,setedelid]=useState('');
  const[complete,setcomplete]=useState(false);
  const [openconfirm, setOpenconfirm] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseconfirm = () => setOpenconfirm(false);
  // useeffect for getting user data from localstorage;
  useEffect(()=>{
    const myprappuser = JSON.parse(localStorage.getItem('myprappuser'))
    if(myprappuser&&myprappuser.token){
      getuser(myprappuser.token);
    }
    console.log(id)
    if(id.length!=0){
      getallTodo();
    }
  },[])
  console.log(complete)
  //get user function
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
   setUser(res);
   setId(res._id);
  }

  //handlechange function starts here
  const handlechange=(e)=>{
    if(e.target.name=='todo'){
      settodo(e.target.value)
    }
    else if(e.target.name=='edittitle'){
      setEdittitle(e.target.value)
    }
  }
  //Todo all crud functions starts here
  //get all todo
  const getallTodo=async()=>{
    const data ={user:id,message:"getall"};
    const todo = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Todocrud`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await todo.json();
    setalltodos(res);
    console.log(alltodos)
  }
  //add a todo
  const addTodo=async()=>{
    if(tododata.length!=0){
    const data ={user:User._id,message:"addtodo",title:tododata};
    const todo = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Todocrud`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await todo.json();
    settodo('');
    getallTodo();
  }
  else{
    toast.error('Please enter a title before adding todo!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  }
const HandleClickedit=(title,id)=>{
  setOpen(true);
  setEdittitle(title);
  seteditid(id);
}
const EditTodo=async()=>{
  if(edittitle.length!=0){
    const data ={id:editid,message:"update",title:edittitle};
    const todo = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Todocrud`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await todo.json();
    setOpen(false);
    setEdittitle('');
    seteditid('');
    getallTodo();
  }
  else{
    toast.error('Please add a edited title before adding todo', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}
const Delete=(id)=>{
  setOpenconfirm(true);
  setedelid(id);
}
const DeleteTodo=async()=>{
  const data ={id:delid};
    const todo = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Todocrud`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await todo.json();
    getallTodo();
    setOpenconfirm(false);
    setedelid('');
}
//complete
const handlecomplete=async(id,res)=>{
if(res==true){
  const data ={id:id,message:"complete",res};
  const todo = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Todocrud`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});
const resp= await todo.json();
console.log(resp);
getallTodo();
}
}

  return (
      <ThemeProvider theme={theme}>
       <FullLayout>
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
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
       
       <div className=''>
         <div className='p-2 font-bold border-2 border-gray-200 rounded text-xl sm:text-2xl bg-gray-100 flex items-center'>
            <FaListUl className='text-blue-800'/>
            <h1 className='mx-4'><span className='text-blue-600'>Todo</span> <span className='text-green-600'>List</span></h1>
         </div>
         <div className='my-4 flex items-center flex-wrap'>
         <input type="text"  className='mx-4 p-2 my-2 font-semibold border-2 border-blue-600 rounded w-[70vh]'name='todo' placeholder='Enter Your Task' value={tododata} onChange={handlechange}/>
         <button
    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring rounded"
   onClick={addTodo}>
     
    <span className="absolute inset-0 border border-blue-600 group-active:border-blue-500 rounded" />
    <span className=" border border-blue-600 bg-blue-600 px-6 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded flex items-center">
    <AiOutlineAppstoreAdd className='font-bold text-xl mx-1'/>
    Add Todo
    </span>
  </button>
         </div>
         <div className='p-2 font-bold rounded text-xl sm:text-2xl flex items-center'>
            <h1 className='mx-4'><span className='text-blue-600'>Your</span> <span className='text-green-600'>Todos</span></h1>
           
         </div>
         <div className='mx-6 h-1 w-52 bg-green-600 rounded-xl '></div>
         <div className='flex flex-wrap overflow-hidden'>
          {/* todo starts here */}
          {alltodos.slice(0).reverse().map((item)=>{return <div className=' w-96 overflow-hidden' key={item._id}>
         <div
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mx-2 my-4"
>
  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
  <div className="sm:flex sm:justify-between sm:gap-4">
    <div >
      <h3 className={`text-lg font-bold text-gray-900 sm:text-xl ${item.completed==true?"line-through":""}`}>
        {item.title}
      </h3>
      <p className="mt-1 text-xs font-medium text-gray-600">By {User.name}</p>
    </div>
  </div>
  <dl className="mt-6 flex gap-4 sm:gap-6 flex-wrap">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Published</dt>
      <dd className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: "numeric",minute: "numeric",second: "numeric",timeZoneName: "short", })}</dd>
    </div>
    <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 items-center">
  <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative" onClick={()=>{
    HandleClickedit(item.title,item._id);
  }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
    Edit
  </button>
  <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative" onClick={()=>Delete(item._id)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
    Delete
  </button>
  <div className="flex items-center mr-4 mx-2">
        <input id="inline-checkbox" type="checkbox" value={complete} name="complete" onChange={(e)=>{
          if(e.target.checked){
            setcomplete(true);
            handlecomplete(item._id,e.target.checked);
          }
        }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  checked={item.completed==true?true:false} />
        <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Competed</label>
    </div>
</div>

  </dl>
</div>

         </div>})}
         </div>
       </div>
        {/* For edit modal */}
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
                  Edit Your Todo
                </Typography>
                <TextField fullWidth label="Enter Your New Title" id="fullWidth" name="edittitle" value={edittitle} onChange={handlechange} margin="dense"/>
                <div className="flex items-center">
              <button className="text-white bg-blue-500 rounded p-2 my-2" onClick={EditTodo}>
                Edit Now
              </button>
              </div>
              </Box>
             
            </Fade>
          </Modal>
        </div>
        {/* For confirm modal */}
        <div>
      <Modal
        open={openconfirm}
        onClose={handleCloseconfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 id="modal-modal-title" variant="h6" component="h2" className='text-xl font-bold'>
          <span className='text-red-600'>Warning⚠️</span>
          </h1>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1 className='font-semibold'>This action cannot be undone. Are you sure you want to delete this item?</h1>
            <button className="text-white bg-blue-500 rounded p-2 my-4" onClick={DeleteTodo}>
                Delete Now
              </button>
          </Typography>
        </Box>
      </Modal>
    </div>
       </FullLayout>
      </ThemeProvider> 
 
  )
}

export default Todo