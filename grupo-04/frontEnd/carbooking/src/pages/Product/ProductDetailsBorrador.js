import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Modal/Slider/Slider";
import CarouselDos from "../../pages/Product/SliderDos/SliderDos";
import {
  FaChevronCircleLeft,
  FaInfoCircle,
  FaCheck,
  FaSuitcaseRolling, FaWind 
} from "react-icons/fa";
import { BiRadio } from "react-icons/bi";
import { GiCarDoor } from "react-icons/gi";
import Reserva from "./CalendarioReservas/Reserva";
import "../Product/boton.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Container,
  Main,
  IconArrow,
  InfoProduct,
  BlockDescription,
  BlockCaracteristics,
  BlockPolicies,
  Text,
  Img,
  ContainerLoader,
  ButtonLoader,
  ContainerDescripcion,
  ContainerButtons,
  Titulos,
  MasDetalles,
  ContainerMoreInfo,
  CiudadUbicacion,
  TextoDescripcion,
  ElementosDescripcion,
} from "./ProductDetails.Styles";

const ProductDetails = () => {
  const [modalState, setModalState] = useState(false);
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
      const result = await response.json();
      setDataProduct(result);
    };
    request();
  }, [id]);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const abrirDescripcionCerrarCaracteristicas = () => {
    if (!open) {
      setOpen(true);
      setOpen2(false);
    }
  };

  const abrirCaracteristicasCerrarDescripcion = () => {
    if (!open2) {
      setOpen(false);
      setOpen2(true);
    }
  };

  return (
    <div>
      {dataProduct &&
        dataProduct?.map((product) => (
          <Container>
            <Main>
              <InfoProduct>
                <h5>{product.category.name}</h5>
                <h6>{product.name}</h6>
              </InfoProduct>
              <IconArrow>
                <Link to="/">
                  <FaChevronCircleLeft
                    style={{ color: "#FCA311", fontSize: "35px" }}
                  />
                </Link>
              </IconArrow>
            </Main>


            <CiudadUbicacion>
              <p>Este carro se encuentra en:</p>
              <h6 style={{ color: "#14213D", fontSize: "15px", fontWeight: "bold" }}>
                {product.city.name}
              </h6>
            </CiudadUbicacion>

            <MasDetalles>
              <ContainerMoreInfo>
                <h6>Este carro incluye</h6>
                <FaInfoCircle />
              </ContainerMoreInfo>
              <ContainerMoreInfo>
                <FaCheck style={{ color: "#FCA311", fontSize: "25px" }} />
                <ContainerMoreInfo>
                  <p style={{ paddingRight: "15px", margin: "5px" }}>
                    
                    Cobertura por daño
                  </p>
                </ContainerMoreInfo>
              </ContainerMoreInfo>
              <ContainerMoreInfo>
                <FaCheck style={{ color: "#FCA311", fontSize: "25px" }} />
                <ContainerMoreInfo>
                  <p style={{ padding: "10px", margin: "5px" }}>
                    
                    Seguro de responsabilidad civil{" "}
                  </p>
                </ContainerMoreInfo>
              </ContainerMoreInfo>
              <ContainerMoreInfo>
                <FaCheck style={{ color: "#FCA311", fontSize: "25px" }} />
                <ContainerMoreInfo>
                  <p style={{ padding: "10px", margin: "5px" }}>
                    
                    Cancelación hasta 24 horas antes del retiro{" "}
                  </p>
                </ContainerMoreInfo>
              </ContainerMoreInfo>
            </MasDetalles>
            <ContainerLoader>
              <ButtonLoader onClick={() => setModalState(!modalState)}>
                <span class="fotos"></span>
              </ButtonLoader>

              <Modal view={modalState} changeView={setModalState}>
                <Carousel> </Carousel>
              </Modal>

              <Img
                border="5rem"
                className="imagenApi"
                src={product.mainImage}
                alt=""
              />
            </ContainerLoader>
            <CarouselDos></CarouselDos>

            <ContainerDescripcion>
              <ContainerButtons>
                <Button
                  style={{ backgroundColor: "#14213D", width: "150px" }}
                  onClick={() => abrirDescripcionCerrarCaracteristicas()}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Descripción
                </Button>

                <Button
                  style={{ backgroundColor: "#14213D", width: "150px" }}
                  onClick={() => abrirCaracteristicasCerrarDescripcion()}
                  aria-controls="example-collapse-caracteristicas"
                  aria-expanded={open2}
                >
                  Caracterísitcas
                </Button>
              </ContainerButtons>

              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <BlockDescription>
                      <div style={{ width: "100%", height: "50px" }}>
                        <Titulos>Descripción del producto</Titulos>
                      </div>
                      <Text>{product.description}</Text>
                    </BlockDescription>
                  </div>
                </Collapse>
              </div>

              <div>
                <Collapse in={open2}>
                  <div id="example-collapse-caracteristicas">
                    <BlockCaracteristics>
                      <div style={{ width: "100%", height: "50px" }}>
                        <Titulos>Caracterísitcas del producto</Titulos>
                      </div>
                   

                        <ElementosDescripcion> 
                          <TextoDescripcion>

                          <FaSuitcaseRolling
                            style={{ color: "#14213D", fontSize: "50px" }}
                          /> 
                          Maletero
                          </TextoDescripcion>
                          
                          <TextoDescripcion>

                          <FaWind
                            style={{ color: "#14213D", fontSize: "50px" }}
                          /> 
                          Aire Acondicionado
                          </TextoDescripcion>
                        

                          <TextoDescripcion>

                          <GiCarDoor
                            style={{ color: "#14213D", fontSize: "50px" }}
                          /> 
                          Ventanas eléctricas
                          </TextoDescripcion>
                          
                          <TextoDescripcion> 

                          <BiRadio
                            style={{ color: "#14213D", fontSize: "50px" }}
                          /> Radio
                          </TextoDescripcion>
                          </ElementosDescripcion>

              
                    </BlockCaracteristics>
                  </div>
                </Collapse>
              </div>
            </ContainerDescripcion>

         
            <BlockPolicies>
              <div style={{ width: "100%", height: "50px" }}>
                <Titulos>Políticas</Titulos>
              </div>
              <Text>
                <ul>
                  <li>
                    Las multas o cantidades asimiladas por infracciones de
                    tráfico o infracciones de leyes durante el período de
                    alquiler son responsabilidad de los conductores del
                    vehículo.
                  </li>
                  <li>
                    Conservar el vehículo en buen estado y no exponerlo
                    potenciales riesgos.
                  </li>
                  <li>
                    No realizar actividades con fines de subarriendo del
                    vehículo, ni transportar personas o mercancías que infrinjan
                    la Ley.
                  </li>
                  <li>
                    No participar en competiciones o carreras deportivas,
                    oficiales o no.
                  </li>
                  <li>
                    No conducir bajo la influencia de bebidas alcohólicas,
                    drogas, otras sustancia.
                  </li>
                  <li>
                    Cerrar correctamente el vehículo, estacionar en lugar apto,
                    adecuado y seguro cuando no está siendo utilizado, así como
                    conservar y mantener la documentación de este dentro.
                  </li>
                </ul>
              </Text>
            </BlockPolicies>
            <Reserva id={id} />
            <Footer />
          </Container>
        ))}
    </div>
  );
};

export default ProductDetails;
