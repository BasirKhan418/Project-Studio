import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const Allstate = createContext();

export function useMyContext() {
  return useContext(Allstate);
}

export function AllstateProvider({ children }) {
const [id, setId] = useState('');
useEffect(()=>{
    const myprappuser = JSON.parse(localStorage.getItem('myprappuser'))
     getuser(myprappuser.token);
},[])
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
}

  return (
    <Allstate.Provider value={{id,setId}}>
      {children}
    </Allstate.Provider>
  );
}
