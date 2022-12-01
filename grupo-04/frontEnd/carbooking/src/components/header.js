import React, { useState, useEffect, useContext} from "react";
import {useLocation, useNavigate, Link} from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import { deepOrange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import LoginModal from "../pages/Login/LoginModal";
import AppContext from '../Context/AppContext';
import Menum from "./Menu/menu";
import ModalRegister from "../pages/Register/ModalRegister";
import AccessAdmin from "./AccessAdmin";
import {Headers,
  ButtonSign,
  ContainerBtn,
  Icon,
  ContainerIcon,
  ContainerMenu,
  CloseButton,
  UserLogin,
  ContainerAvatar,
  ButtonUp} from "../pages/home/home.styles";

  const Header = () => {
    

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const location = useLocation();
  const navigate = useNavigate();
     
  const {setInfoUsuario} = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    acceso: false,
  });


    // Logica Modal Register
    const [showModalRegister, setShowModalRegister] = useState(false);
    const handleCloseRegister = () => setShowModalRegister(false);
    const handleShowRegister = () => {
      setShowModalRegister(true);
      setShow(false);
    }
    const handleShowLogin = () => {
      setShow(true);
      setShowModalRegister(false); 
    }
    // Cierra logica modal register 

    const cierraLoginAbreRegistro = () => {
      setShowModalRegister(true);
      setShow(false);
    }



  useEffect(()=>{
    if (location.state?.fromRegister || location.state?.fromRegister != null) {
      setShow(false);
      navigate("/", {state: null})
    }
  }, [location, navigate] )


  useEffect(() =>{
    if (location.state?.fromLogin || location.state?.fromLogin != null) {
      setShow(false);
      navigate("/", {state: null})
    }
  }, [location, navigate])


  const handleClose = () => setShow(false);
  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("authorities");
  }

  const handleClick = () => {
    setInfoUsuario({acceso: false});
    setUser({ ...user, acceso: false });
    handleClose();
    logout();
    navigate("/")
  };



 


  return (
    <>
    <Headers>
      <ContainerIcon>
        <Link to="/"><Icon src="/per2.png" alt='morgamlogo' /></Link>
        <p>Tu camino, tus reglas.</p>
      </ContainerIcon>

      <ContainerMenu>
        <Menum
          usuario={user}
          mostrarModal={handleShowLogin}
          setUsuario={setUser}
          cerrarModal={handleClose}
          handleShowRegister={handleShowRegister}
        />
      </ContainerMenu>

      <ContainerBtn>
        

        {user?.acceso ? (
          <UserLogin> 
          <ContainerAvatar>
            
        
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
            <Avatar sx={{ bgcolor: deepOrange[500] }} >
            {user.name.substr(0, 1)}
            </Avatar>

      </StyledBadge>
             Hola, {user.name}
        </ContainerAvatar>
        <AccessAdmin  />
            <CloseButton onClick={() => handleClick() }>
              Cerrar
            </CloseButton>
          </UserLogin>
        ) : (
          <>
          <ButtonUp onClick={() => handleShowRegister()}>Crear cuenta</ButtonUp>
          <ButtonSign onClick={() => handleShowLogin()}>Iniciar sesión</ButtonSign>


          </>
        )} 


      </ContainerBtn>
    </Headers>

    <LoginModal show={show} cerrarModal={handleClose} cierraLoginAbreRegistro={cierraLoginAbreRegistro} setUsuario={setUser} usuario={user}> </LoginModal>
    <ModalRegister setUsuario={setUser} toggleModal= {handleShowLogin} showModalRegister={showModalRegister} handleCloseModalRegister={handleCloseRegister}>
    </ModalRegister>
    </>
  );
};

export default Header;
