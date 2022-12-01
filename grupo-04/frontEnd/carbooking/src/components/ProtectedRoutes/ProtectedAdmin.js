import React, {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import Swal from "sweetalert2"
import AppContext from '../../Context/AppContext';

const ProtectedAdmin = () => {

    const {infoUsuario} = useContext(AppContext);
    const correoUsuario = infoUsuario.email


    if (correoUsuario === "admin@morgam.com") {
        return <Outlet/>
      } else {
        Swal.fire({
          title: 'No eres administrador',
          text:'Acceso denegado',
          icon:'error'
      })
          return <Navigate to="/" />
      }
  
}

export default ProtectedAdmin