import {useState} from 'react';

const useInitialState = () => {
    
  const [infoUsuario, setInfoUsuario] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    acceso: false,
  });

  const [isAdmin, setIsAdmin] = useState(false);

  return {infoUsuario, setInfoUsuario, isAdmin, setIsAdmin}
}

export default useInitialState

