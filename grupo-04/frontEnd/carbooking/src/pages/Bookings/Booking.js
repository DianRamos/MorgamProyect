import React, { useState, useEffect, useContext }  from 'react'
import { useParams, Link, Outlet } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa"
import {Container,Main,IconArrow,InfoProduct,} from "../Product/ProductDetails.Styles";
import Footer from '../../components/footer'
import FormBooking from './FormBooking';
import AppContext from '../../Context/AppContext';


const Booking = () => {
  
  const {infoUsuario} = useContext(AppContext);
  console.log("Esta es la informacion del usuario ",infoUsuario.email)

  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
      const result = await response.json();
      setDataProduct(result[0]);
    };
    request();
  }, [id]);

  const idProducto = parseInt(id) 

  const [dataBooking, setDataBooking] = useState({
    startHour: "",
    startDate: "",
    endDate: "",
    user: {id: infoUsuario.id},
    product: {id: idProducto},
  });

  const [dataHour, setDataHour] = useState("00:00:00");

    return (
        <div>
            <Outlet/>
            <Container>
              <Main>
                <InfoProduct>
                <h5>{dataProduct?.category.name}</h5>
                  <h6>{dataProduct?.name}</h6>
                </InfoProduct>
                <IconArrow>
                  <Link to="/">
                    <FaChevronCircleLeft
                      style={{ color: "#FCA311", fontSize: "35px" }}
                    />
                  </Link>
                </IconArrow>
              </Main>
              <FormBooking dataBooking={dataBooking} setDataBooking={setDataBooking} dataHour={dataHour} setDataHour={setDataHour} dataProduct={dataProduct} />
              <Footer />
            </Container>

      </div>
    
    
           
    
    
    )
}

export default Booking