import React, {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import Swal from "sweetalert2"
import AppContext from '../../Context/AppContext';


const ProtectedRoutes = () => {  
  
  const {infoUsuario} = useContext(AppContext);
    if (infoUsuario.acceso) {
        return <Outlet/>
      } else {
        Swal.fire({
          title: 'No eres un usuario logueado',
          text:'Por favor registrate o inicia sesion',
          icon:'error'
      })
          return <Navigate to="/" />
      }
}

export default ProtectedRoutes