import React, { useState } from 'react'
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import Swal from "sweetalert2"
import { useNavigate} from 'react-router-dom';
import LoginModal from '../Login/LoginModal';

import {PrincipalForm, Button,CenteredText,LastParagraph,TextLink,
    Body,OneDiv,TwoDiv,ThreeDiv,Title,H6,ButtonLogin,InputsContainer, Input} from './Register.styles';

const RegisterFormik = ({toggleModal, cerrarModalRegister}) => {

    const navigate = useNavigate();
    const formik = useFormik({

        initialValues:{
            name: "",
            lastName: "",
            email: "",
            password: "",
            "role" : {"id":"1"} 
        },

        validationSchema: Yup.object({
            name: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required('El nombre es obligatorio'),
            lastName: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required("El apellido es obligatorio"),
            email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
            password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria")
        }),

        onSubmit: (valores) => {
           cerrarModalRegister();
  
            const settings = {
                method: "POST",
                body: JSON.stringify(valores),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json;charset=utf-8",
                }
            }

            fetch("http://18.219.33.103:8080/api/v1/user", settings)
         .then((response) => {
                if(response.ok){
                    Swal.fire({
                        title: 'Registro realizado con éxito',
                        text:'Ahora puedes iniciar sesión',
                        icon:'success'
                    })
                    console.log("respuesta: ", response)
                    return response.json();

                }else if(response.ok !== true)
                    Swal.fire({
                        title: 'Algo salió mal',
                        text:'“Lamentablemente no ha podido registrarse. Por favor intente más tarde”',
                        icon:'error'
                    })   
         })
         .then(function(data) {
          
                localStorage.setItem('jwt', JSON.stringify(data.token));
             navigate("/", {state: {fromRegister: true}})
         })
         .catch(function(error) {
              console.error(error);
         });
        }, 
    }
    
    );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

	return (
		<>
            <Body>
                <PrincipalForm onSubmit={formik.handleSubmit}>
                    
                <OneDiv>
                <Title> Registro </Title>
                    
                <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            </OneDiv>

            <TwoDiv>
                    <InputsContainer>
                        <H6> Nombre </H6>
                        <label htlmFor="firstName"></label>
                        <Input type="text"
                         id= "name"
                         name="name"
                         placeholder='Nombre'
                         value={formik.values.name}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         />
                    {formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>}
                    
                    </InputsContainer>

                    <InputsContainer>
                        <H6> Apellido </H6>
                        <label htlmFor="lastName"> </label>
                        <Input type="text"
                        id= "lastName"
                        name="lastName"
                        placeholder='Apellido'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName && <span style={{ color: "red" }}>{formik.errors.lastName}</span>}
                    </InputsContainer>

                    <InputsContainer>
                        <H6> E-mail </H6>
                        <label htlmFor="email"></label>
                        <Input type="email"
                        id= "email"
                        name="email"
                        placeholder='E-mail'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>}
                    </InputsContainer>

                    <InputsContainer>
                        <H6> Contraseña </H6>
                        <label htlmFor="password"></label>
                        <Input type="password"
                        id= "password"
                        name="password"
                        placeholder='Contraseña'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>}
                    </InputsContainer>
                    
            </TwoDiv>  

            <ThreeDiv>
                <Button type="submit"> Registrarse </Button>
            </ThreeDiv>


            <TextLink>
                <p> ¿Ya tienes una cuenta?</p>
                <ButtonLogin onClick={() => toggleModal()}>
                    Entra aquí
                </ButtonLogin >
                <LoginModal mostrar={show} cerrarModal={handleClose}/>
            </TextLink>
            <LastParagraph></LastParagraph>

                </PrincipalForm>
            </Body>
		</>
	);
}

export default RegisterFormik
