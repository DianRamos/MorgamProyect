import React, { useContext} from "react";
import {useNavigate} from 'react-router-dom';
import AppContext from '../Context/AppContext';
import {ButtonSign} from "../pages/home/home.styles";

const AccessAdmin = () => {
    const {isAdmin} = useContext(AppContext);

    const navigate = useNavigate();
    return (
            <>
        {isAdmin && 
    <div isAdmin={isAdmin}>
        <ButtonSign onClick={() =>  navigate("/administrador") }> Crear Producto </ButtonSign>
    </div>}
    </>
  )
}

export default AccessAdmin