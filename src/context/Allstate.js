import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const Allstate = createContext();

export function useMyContext() {
  return useContext(Allstate);
}

export function AllstateProvider({ children }) {
const [id, setId] = useState('');
  return (
    <Allstate.Provider value={{id,setId}}>
      {children}
    </Allstate.Provider>
  );
}
