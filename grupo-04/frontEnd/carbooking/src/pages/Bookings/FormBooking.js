import React, { useContext } from 'react';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import CalendarioReserva from '../Product/CalendarioReservas/CalendarioReserva';
import Hora from "../Product/CalendarioReservas/Hora";

import {Container,GridContainer,PersonalData,Calendar,Schedule,ReservedProduct,
  Policies,InputsContainer,Input,ImagenQuemada,Button,TituloDetalleReserva,ParrafoDetalle,
  Descripcion,DateSecction} from "./Booking.styled"


const FormBooking = ({ dataBooking, setDataBooking, dataHour, setDataHour, dataProduct, }) => {

  const { infoUsuario } = useContext(AppContext);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('jwt'));

  const handleClick = () => {

    const raw = JSON.stringify(dataBooking);
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: raw,
      redirect: 'follow'
    };

    fetch("http://18.219.33.103:8080/reservations", requestOptions)
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: 'Reserva exitosa',
            text: 'Disfruta tu viaje',
            icon: 'success',
          })
          navigate("/")
          console.log("respuesta: ", response)
          return response.json();

        } else if (response.ok !== true)
          Swal.fire({
            title: 'Lamentablemente no se pudo realizar la reserva',
            text: 'Completa todos los campos',
            icon: 'error'
          })
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <Container>
      <GridContainer>
        <PersonalData>

          <h4>Completa tus datos</h4>
          <InputsContainer>
            <label htmlFor="firstName">Nombre</label>
            <Input id="firstName" name="firstName" placeholder="Nombre" disabled value={infoUsuario.name} />
          </InputsContainer>

          <InputsContainer>
            <label htmlFor="lastName">Apellido</label>
            <Input id="lastName" name="lastName" placeholder="Apellido" disabled value={infoUsuario.lastName} />
          </InputsContainer>

          <InputsContainer>
            <label htmlFor="email">Correo electronico</label>
            <Input id="email" name="email" placeholder="correo@correo.com" type="email" disabled value={infoUsuario.email} />
          </InputsContainer>

          <InputsContainer>
            <label htmlFor="city">Ciudad</label>
            <Input id="city" name="city" placeholder="Ciudad" />
          </InputsContainer>
        </PersonalData>


        <Calendar>
          <h4>Seleccion?? tu fecha de reserva</h4>
          <CalendarioReserva dataBooking={dataBooking} setDataBooking={setDataBooking} dataHour={dataHour} dataProduct={dataProduct} />
        </Calendar>

        <Schedule>
          <h6>Indica tu horario estimado de llegada </h6>
          <Hora dataBooking={dataBooking} setDataBooking={setDataBooking} setDataHour={setDataHour} />
          <p>Tu auto estar?? listo a la hora programada {dataBooking?.startHour} </p>
        </Schedule>
        <ReservedProduct>
          <TituloDetalleReserva>Detalle de reserva </TituloDetalleReserva>
          <ImagenQuemada src={dataProduct?.mainImage} alt="" />

          

            <Descripcion> Descripci??n del auto </Descripcion>
            <ParrafoDetalle>{dataProduct?.description}</ParrafoDetalle>
            <DateSecction>
              <hr />
              <p>Check in</p>
              <>{dataBooking?.startDate}</>
              <hr />
              <p>Check out</p>
              <>{dataBooking?.endDate}</>
              <hr />
              <p>tu auto esta ubicado en {dataProduct?.city.name} la hora de recogida programada es</p>
              <>{dataBooking?.startHour}</>
            </DateSecction>

          <Button type="button" onClick={() => handleClick()} >Iniciar reserva</Button>
        </ReservedProduct>
        
      </GridContainer>
      <Policies>

<h5 style={{}}>Pol??ticas</h5>
<li>
  Las multas o cantidades asimiladas por infracciones de
  tr??fico o infracciones de leyes durante el per??odo de
  alquiler son responsabilidad de los conductores del
  veh??culo.
</li>
<li>
  Conservar el veh??culo en buen estado y no exponerlo
  potenciales riesgos.
</li>
<li>
  No realizar actividades con fines de subarriendo del
  veh??culo, ni transportar personas o mercanc??as que infrinjan
  la Ley.
</li>

</Policies>
    </Container>
  )
}

export default FormBooking