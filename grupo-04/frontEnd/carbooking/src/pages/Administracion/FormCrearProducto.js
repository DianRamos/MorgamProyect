import Select from "react-select";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../Administracion/AdminForm.css";
import ComponenteInput from "../../components/input/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Boton, Label } from "../../components/elementStyle/Form";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import { ContainerForm } from "../Administracion/AdministracionStyles";

export default function FormCrearProducto() {
  const [dataCaracteristicas, setDataCaracteristicas] = useState([]);
  const [dataCiudades, setDataCiudades] = useState([]);
  const [idCiudad, setIdCiudad] = useState([]);
  const [dataCategoria, setDataCategoria] = useState([]);
  const [idCategoria, setIdCategoria] = useState([]);
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [descripcion, setDescripcion] = useState([]);
  const [urlImagen, setUrlImagen] = useState([]);
  const [arrayUrlImagen, setArrayUrlImagen] = useState([]);
  const [formularioValido, setFormularioValido] = useState(false);
  const [btonDisable, setBtonDisable] = useState(true);
  const [isProductoCreado, setIsProductoCreado] = useState(false);
  const [idProductoCreado, setIdProductoCreado] = useState([]);
  const [bandera, setBandera] = useState(false);

  // Código que no se ultilizo:
  console.log(
    "Código que no se ultilizo: ",
    isProductoCreado,
    setIdProductoCreado,
    setBandera
  );

  // const cors = require("cors");
  //useEffect
  const didMount = React.useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      setIsProductoCreado(false);
      return;
    }

    setIsProductoCreado(true);
    console.log("idProductoCreado: ", idProductoCreado);
  }, [bandera, idProductoCreado]);

  useEffect(() => {
    const requestCategories = async () => {
      const response = await fetch("http://18.219.33.103:8080/categories");
      const result = await response.json();
      const resultCategories = result.map((cat) => {
        return {
          label: cat.name,
          value: cat.id,
        };
      });
      setDataCategoria(resultCategories);
    };
    requestCategories();

    // Recupera ciudades de API 
    const requestCities = async () => {
      const response = await fetch("http://18.219.33.103:8080/cities");
      const result = await response.json();
      const resultCities = result.map((city) => {
        return {
          label: city.name,
          value: city.id,
        };
      });
      setDataCiudades(resultCities);
    };
    requestCities();

        // Recupera ciudades de Caracterísitcas 
    const requestAttributes = async () => {
      const response = await fetch("http://18.219.33.103:8080/characteristics");
      const result = await response.json();
      const resultAttributes = result.map((attribute) => {
        return {
          label: attribute.name,
          value: attribute.id,
        };
      });
      console.log(resultAttributes);
      setDataCaracteristicas(resultAttributes);
    };
    requestAttributes();

    return;
  }, []);

  //console.log(arrayCaracteristicas);

  useEffect(() => {
    console.log("Se ejecuta cuando?");
    console.log(arrayUrlImagen);

    const token = localStorage.getItem("jwt");
    console.log(token);

    if (
      nombre.campo !== null &&
      direccion.campo !== null &&
      idCategoria !== null &&
      idCiudad !== null &&
      descripcion.length !== 0 &&
      arrayUrlImagen.length !== 0
    ) {
      setFormularioValido(true);
      setBtonDisable(false);
    } else {
      console.log("true");
      setFormularioValido(false);
      setBtonDisable(true);
    }
  }, [
    nombre.campo,
    direccion.campo,
    idCategoria,
    idCiudad,
    descripcion.length,
    arrayUrlImagen.length,
    arrayUrlImagen,
  ]);

  //botones plus

  const handleAddImagen = () => {
    const newImagen = {
      nombre: "imagen",
      url: urlImagen,
    };
    setArrayUrlImagen([...arrayUrlImagen, newImagen]);
    setUrlImagen("");
  };

  const handleRemoveImagen = (urlImg) => {
    const newUrlsImagen = arrayUrlImagen.filter((img) => img.url !== urlImg);
    setArrayUrlImagen(newUrlsImagen);
  };

  const crearProducto = async () => {
    const token = localStorage.getItem("jwt");
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: nombre.campo,
        description: descripcion,
        mainImage: arrayUrlImagen[0].url.campo,
        city: {
          id: idCiudad,
        },
        category: {
          id: idCategoria,
        },
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://18.219.33.103:8080/products", requestOptions)
        .then((response) => {
          if(response.ok){
            Swal.fire({
              title: 'Producto creado con éxito',
              text:'Se ha creado tu producto',
              icon:'success'
            })
           
                  console.log("respuesta: ", response)
                  return response.json();
              }else if(response.status === 401)
                  Swal.fire({
                      title: 'Algo salio mal',
                      text:'“No se ha creado el producto”',
                      icon:'error'
                  }) 
        })
        .then(function(result) {
          
          console.log("RESPUESTA ",result)

        })
        .catch((error) => {
          console.error("ERROR ", error);
        });

        // const settingsImg = {
        //   method: "POST",
        //   body: JSON.stringify(arrayUrlImagen),
        //   headers: {
        //     "Content-type": "application/json",
        //     "Accept": "application/json",
        //   }
        // }

        
        // fetch("http://18.219.33.103:8080/images", settingsImg)
        // .then((response) => {
        //   if(response.ok){
        //     Swal.fire({
        //       title: 'Envio exitoso',
        //       text:'se cargaron',
        //       icon:'success'
        //     })
           
        //           console.log("respuesta: ", response)
        //           return response.json();
        //       }else if(response.status === 401)
        //           Swal.fire({
        //               title: 'Algo salio mal',
        //               text:'“No se enviaron las images”',
        //               icon:'error'
        //           }) 
        // })
        // .then(function(result) {
          
        //   console.log("RESPUESTA ",result)

        // })
        // .catch((error) => {

        // });

    } catch (error) {
      console.error("ERROR REGISTRO PRODUCTO ", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formularioValido) {
      const respuestaPostProducto = await crearProducto();
      const idProducto = respuestaPostProducto?.id;
      console.log(idProducto);
      // peticionCaracteristicas(idProducto)
      // navigate("/creacionExitosa");
    }
  };

  return (
    <>
      <ContainerForm>
        <h2>Crear producto</h2>
        <Form className="form" action="" onSubmit={onSubmit}>
   
          <div className="contenedorUno">
            <div className="nombre">
              <ComponenteInput
                style={{ backgroundColor: "red" }}
                estado={nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Nombre"
                placeholder="Nombre del producto"
                name="nombre"
                parrafoError="El nombre solo puede contener letras y espacios."
              />
            </div>
            <div className="categoria">
              <Label htmlFor="Categoria">Categoria</Label>

              <Select
                placeholder={<p className="selectPlaceholder">Categoria</p>}
                className="selectCategoriaCrearProducto"
                options={dataCategoria}
                onChange={(e) => {
                  setIdCategoria(e.value);
                }}
              />
            </div>

            <div className="ciudad">
              <Label htmlFor="Ciudad">Ciudad</Label>
              <Select
                placeholder={<p className="selectPlaceholder">Ciudad</p>}
                className="selectCiudadCrearProducto"
                options={dataCiudades}
                onChange={(e) => {
                  setIdCiudad(e.value);
                }}
              />
            </div>
            <div className="direccion">
              <ComponenteInput
                estado={direccion}
                cambiarEstado={cambiarDireccion}
                tipo="text"
                label="Dirección"
                placeholder="Diligencie la dirección"
                name="direccion"
                parrafoError="Dirección inválido"
              />
            </div>

            <div class="descripcion">
              <Label htmlFor="descripcion">Descripción</Label>
              <textarea
                class="area"
                id="descripcion"
                rows="3"
                placeholder="Escribir aquí"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
              ></textarea>
            </div>
          </div>

          <div className="contenedorDos">
            <div className="atributos">
              <h4>Agregar atributos</h4>

              {
                <ul className="toppings-list">
                  {dataCaracteristicas.map(({ label, value }, index) => {
                    return (
                      <li key={index}>
                        <div >
                          <div className="left-section">
                            <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={value}
                              value={value}
                              // checked={checkedState[index]}
                              onChange={() => {}}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {" "}
                              {label}
                            </label>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>


            <div className="generalCargaImagenes">
            <h4>Cargar imágenes</h4>
              <div className="contenedorCargarImagenes">
                {arrayUrlImagen.map((img, i) => (
                  <div className="crearEliminarImagen">
                    <div className="inputCargarImagen">
                      <ComponenteInput
                        estado={arrayUrlImagen[i]}
                        tipo="text"
                        name="inputCargarImagen"
                        placeholder={img.url.campo}
                        isDisabled="true"
                      />
                    </div>
                    <div className="contenedorMinus"
                      onClick={(e) => handleRemoveImagen(img.url)}
                    >
                      <FontAwesomeIcon icon={faMinus} className="iconoMinus" />
                    </div>
                  </div>
                ))}
                <div className="contenedorDeAgregarImagen">
                  <div className="inputCargarImagen">
                    <ComponenteInput
                      estado={urlImagen}
                      cambiarEstado={setUrlImagen}
                      tipo="text"
                      name="inputCargarImagen"
                      placeholder="Insertar https://"
                    />
                  </div>
                  <div className="contenedorPlus" onClick={handleAddImagen}>
                    <FontAwesomeIcon icon={faPlus} className="iconoPlus" />
                  </div>
                </div>

                

                <Boton
                  type="submit"
                  disabled={btonDisable}
                  className="botonCrearProducto"
                >
                  Crear
                </Boton>
              </div>
            </div>
          </div>
        </Form>
      </ContainerForm>
    </>
  );
}
