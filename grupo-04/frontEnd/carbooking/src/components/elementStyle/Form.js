import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orange = "#FCA311";
const PetrolBlue = "#14213D";

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ED12D"
}

const Formulario = styled.form`
	display:flex;
	flex-direction: column;
	margin-bottom: 55px;
	margin-top: 70px;
	background-color:#f3f3f3;
`;

const Label = styled.label`
	margin: 15px 0px;
	padding: 10px;
	min-height: 40px;
	font-weight: 500;
	font-size: 16px;
	font-style: normal;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center

	
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	width: 100%;
	position: relative;
	z-index: 0;
`;

const Input = styled.input`
	border: 5px solid pink;
	background: #FFFFFF;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	padding: 0px 10px 0px 20px;
	box-sizing: border-box;
	width: 100%;
	height: 35px;
	border:none;
	outline: none;
	width: 100%;
	opacity: 0.75;
	line-height: 35px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&::placeholder{
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		opacity: 0.85;
	}
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const ParrafoError = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	text-align: right;
	margin-bottom: 5px;
	color: ${colores.error};
	display: none;
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
border: 5px solid red;
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;


const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 35px;
`;

const Boton = styled.button`
background: ${PetrolBlue}; /* color de fondo */
color: ${Orange}; /* color de fuente */
font-weight:bold; 
border: 2px solid ${Orange}; /* tamaño y color de borde */
width: 180px;
padding: 5px;
border-radius: 8px; /* redondear bordes */
position: relative;
z-index: 0;
overflow: hidden;
display: inline-block;
:hover {
  color: ${PetrolBlue}; /* color de fuente hover */
  font-weight: bold;
  border: 2px solid ${Orange}; /* tamaño y color de borde */
}

::after {
  content: "";
  background: ${Orange}; /* color de fondo hover */
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
`;



const MensajeExito = styled.p`
	margin-top:10px;
	height: 45px;
	line-height: 45px;
	background: ${colores.exito};
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}	
	font-size: 14px;
	color: #191B1D;
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	text-align:center;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	ParrafoError,
	IconoValidacion,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,

};