import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const Allstate = createContext();

export function useMyContext() {
  return useContext(Allstate);
}

export function AllstateProvider({ children }) {
const [id, setId] = useState('');
const[alert,setAlert]=useState(false);
  return (
    <Allstate.Provider value={{id,setId,alert,setAlert}}>
      {children}
    </Allstate.Provider>
  );
}
