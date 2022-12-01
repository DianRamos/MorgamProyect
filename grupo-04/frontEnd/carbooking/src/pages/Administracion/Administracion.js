import React from "react";
import { Outlet } from "react-router-dom";
import FormCrearProducto from "./FormCrearProducto";
// import Navbar from "../../components/Navbar/Navbar";
// import TituloProducto from "./TituloProducto";
import Footer from '../../components/footer'

const Administracion = () => {
  return (
    <>
      <Outlet/>
        {/* <TituloProducto/> */}
        <FormCrearProducto/>        
        <Footer/>
    </>
  );
};

export default Administracion;