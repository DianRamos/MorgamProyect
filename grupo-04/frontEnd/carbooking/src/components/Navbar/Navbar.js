// import React, { useEffect, useState, useContext } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";


// <>
//   <style type="text/css">
//     {`
//   .btn-secondary {
//     background-color: #dfe4ea;
// color: #f0572d;
// padding: 5px 20px;
// font-weight: 700;
// font-size: 16px;
// background: #ffffff;
// border: 1px solid #f0572d;
// border-radius: 5px;
//   }
//   `}
//   </style>
// </>;

// const Navbar = ({ onClick }) => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const buttonsView = {
//     "/": (
//       <>
//         <Link to="/account">
//           <Button variant="secondary" className="buttonNavBarAccount">
//             Crear cuenta
//           </Button>
//         </Link>
//         <Link to="/login">
//           <Button variant="primary" className="buttonNavBarLogin">
//             Iniciar Sesión
//           </Button>
//         </Link>
//       </>
//     ),
//     "/reserva": (
//       <>
//         <Link to="/account">
//           <Button variant="secondary" className="buttonNavBarAccount">
//             Crear cuenta
//           </Button>
//         </Link>
//         <Link to="/login">
//           <Button variant="primary" className="buttonNavBarLogin">
//             Iniciar Sesión
//           </Button>
//         </Link>
//       </>
//     ),
//     "/productos": (
//       <>
//         <Link to="/account">
//           <Button variant="secondary" className="buttonNavBarAccount">
//             Crear cuenta
//           </Button>
//         </Link>
//         <Link to="/login">
//           <Button variant="primary" className="buttonNavBarLogin">
//             Iniciar Sesión
//           </Button>
//         </Link>
//       </>
//     ),
//     "/account": (
//       <>
//         <Link to="/login">
//           <Button variant="primary" className="buttonNavBarLogin">
//             Iniciar Sesión
//           </Button>
//         </Link>
//       </>
//     ),
//     "/login": (
//       <>
//         <Link to="/account">
//           <Button variant="secondary" className="buttonNavBarAccount">
//             Crear cuenta
//           </Button>
//         </Link>
//       </>
//     ),
//   };

//   const handleIsAuthMenu = () => {
//     if (isAuthenticatedMenu) {
//       return (
//         <div className="SidebarBienvenida">
//           <div>
          
//           </div>          
//           <div className="lineaHorizontal"/>
//           <div>
//             <span> 
              
//             </span>
//           </div>
//           <div>
//             <p>Hola,</p>
            
//           </div>
//           <button className="cruz" onClick={handleClick}>
//             X
//           </button>
//         </div>
//       );
//     } else {
//       return buttonsView[pathname];
//     }
//   };

//   const handleClick = () => {
    
//     navigate("/");
//   };

//   return (
//     <>
//       <div className="navBar">
//         <div className="logoNavBar">
//           {
//             <Link to="/">
              
//             </Link>
//           }
//           <p className="parrafoNavBar">Sentite como en tu hogar</p>
//         </div>
//         <div className="botones">
//           {handleIsAuthMenu()}
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;