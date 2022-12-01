import React from 'react'
import './menustyles.css';
import Avatar from "@mui/material/Avatar";

const Menum = ({ mostrarModal, cerrarModal, usuario, setUsuario, handleShowRegister }) => {

  return (
    <div>
      <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="" />
      <label for="abrir-cerrar">&#9776;
        <span class="abrir"></span>
        <span class="cerrar"></span>
      </label>
      <div id="sidebar" class="sidebar">
        <ul class="menu">
          {usuario?.acceso ? (
            <>
            <div className='nombreUsuario'> 
            <Avatar>
            {usuario.name.substr(0, 1)}
            </Avatar>
            Hola, {usuario.name}
            </div>
            

              <li><button class="primero"
                onClick={() => {
                  setUsuario((user) => {
                    return {
                      ...user,
                      acceso: false,
                    };
                  });
                  cerrarModal();
                }}
              >
                Cerrar
              </button></li>
            </>
          ) : (
            <>
              <li><button class="primero" onClick={() => mostrarModal()}>Iniciar sesion</button></li>
              <li ><button class="primero" onClick={() => handleShowRegister()}>Crear cuenta</button></li>
            </>
          )}


        </ul>
        <div>

        </div>
      </div>
    </div>
  )
}
export default Menum
