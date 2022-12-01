import styled from "styled-components";

const Orange = "#FCA311";
const LightGrey = "#E5E5E5";
const Blue = "#34495E";
const PetrolBlue = "#14213D";
const OrangeTwo = "#F5B041";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${LightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
  }


`;
//Styles for nav bar with title and arrow
export const Main = styled.nav`
  display: flex;
  justify-content: space-between;
  background: ${Blue};
  padding: 24px;
  width: 100%;
  height: 120px;
  opacity: 0.97;
  z-index: 4;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InfoProduct = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 30%;
  height: 100px;



  @media (max-width: 667px) {
    display: flex-start;

    width: 100%;
  }
`;

export const IconArrow = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 58px;
  padding-right: 40px;

  @media (max-width: 667px) {
    display: none;
  }
`;
//Styles for ubication bar and qualification of product

export const Ubication = styled.div`
  display: flex;
  border-radius: 20px;
  opacity: 0.97;
  justify-content: space-between;
  background: ${OrangeTwo};
  padding: 24px;
  width: 98%;
  height: 150px;
  z-index: 5;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 180px;
  }


`;

export const InfoUbication = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  color: ${Blue};
  font-size: 30px;
  width: 30%;
  height: 100px;
  margin-top: 30px;
  

  @media (max-width: 667px) {
    display: flex-start;
  }
`;

export const IconUbication = styled.span`
.ubication {
  width: 48px;
  height: 42px;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  position: relative;
  bottom: 85px;
  left: 190px;
}
.ubication::after {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50% 50% 0;
  border: 15px solid  ${Blue};
  transform: rotate(45deg) translate(0, 0);
  box-sizing: border-box;
  animation: animMarker 0.4s ease-in-out infinite alternate;
}
.ubication::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150%;
  width: 24px;
  height: 4px;
  border-radius: 50%;
  background: ${Blue};
  animation: animShadow 0.4s ease-in-out infinite alternate;
}

@keyframes animMarker {
  0% {
    transform: rotate(45deg) translate(5px, 5px);
  }
  100% {
    transform: rotate(45deg) translate(-5px, -5px);
  }
}

@keyframes animShadow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
    
`

export const Qualification = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 58px;
  padding-right: 40px;
  color: ${Blue};
  font-size: 20px;

  @media (max-width: 667px) {
    display: none;
  }
`;

//styles for block galery products

export const Galery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;
  background-color: ${Orange};
  width: 90%;
  height: 500px;
  box-shadow: 29px 22px 50px -1px rgba(0, 0, 0, 0.38);
  border-radius: 1rem;
  background-color: #fff;
  padding-left: 150px;
  gap: 10px;



  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 700px;
  }

`;

export const Image = styled.div`
  width: 100%;
  height: ${(props) => props.heigth};
  grid-area: ${(props) => props.area};
  border-radius: ${(props) => props.border};
  color: transparent;
  border: 2px solid ${Blue};
  .imagenApi {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${(props) => props.border};
  }
  


`;

export const Img = styled.img`
width: 50%;
height: 100%;

animation-duration: 3s;
animation-name: slidein;
animation-iteration-count: 1;

@keyframes slidein {
 from {
   margin-left: 100%;
   width: 50%;
 }

 to {
   margin-left: 0%;
   width: 50%;
 }
}

@media (max-width: 1124px) {
  display: none; 
}




`

export const ImagenVerMas = styled.div`
width: 100%;
height: ${(props) => props.heigth};
grid-area: ${(props) => props.area};
border-radius: ${(props) => props.border};
color: transparent;
border: 2px solid ${Blue};
.imagenApi {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.border};
}

@media (max-width: 670px) {
  width: 260px;
  height: 30%;
  position: relative;
  top: 100px;
  right: 80px;
}
`;

export const VerMas = styled.button`
  width: 75px;
  height: 50px;
  background-color: transparent;
  border: none;
  color: #000;
  font-weight: bold;
  position: relative;
  left: 35px;
  bottom: 50px;

  @media (max-width: 670px) {
    // position: relative;
    // bottom: 120px;
    // left: 80px;
  }
`;

//styles for block description
export const BlockDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  padding-top: 30px;
  height: 300px;
  opacity: 0.97;
  background-color: ${OrangeTwo};
  border-top: 3px  solid ${OrangeTwo};
  color: white;
  box-shadow: 0px 22px 50px -1px rgba(0,0,0,0.38);


  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150%;
  }

`;
export const Text = styled.p`
  text-align: left;
`;
//styles for block caracteristics
export const BlockCaracteristics = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  height: 250px;
  color: white;
  background-color: ${OrangeTwo};
  box-shadow: 0px 22px 50px -1px rgba(0,0,0,0.38);



  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

`;
//styles for block policies
export const BlockPolicies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px;
  width: 100%;
  height: 300px;
  padding-top: 30px;
  line-height: 1.8;
  overflow: hidden;
  opacity: 0.97;
  color: white;
  background-color: ${PetrolBlue};

  box-shadow: 0px 22px 50px -1px rgba(0,0,0,0.38);


  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
  }

`;

export const ContainerLoader = styled.div`

margin-top: 30px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;


@media (max-width: 1124px) {
  display: none; 
}

` 

export const ButtonLoader = styled.button`
width: 75px;
height: 50px;
background-color: transparent;
border: none;
color: #000;
font-weight: bold;
position: absolute;
top: 300px;
z-index: 0;

animation-duration: 3s;
animation-name: slidein;
animation-iteration-count: 1;

@keyframes slidein {
 from {
   margin-left: 100%;
   width: 50%;
 }

 to {
   margin-left: 0%;
   width: 50%;
 }
}

@media (max-width: 1124px) {
  display: none; 
}

`

export const ContainerDescripcion = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  
` 

export const TextoDescripcion = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 160px;
  padding: 10px;
  overflow: hidden;

  @media (max-width: 670px) {
    width: 70px;
    height: 90px;
    font-size: 9px;
  }

` 
export const ElementosDescripcion = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  @media (max-width: 670px) {
      width: 100%;
  }

`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;



  @media (max-width:670px) {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

`

export const Titulos = styled.h5`
  text-align: center;
`

export const CiudadUbicacion = styled.div`

 width: 250px;
 height: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: ${OrangeTwo};
 border-radius: 5px;
 color: white;
 font-weight: bold;
 position: absolute;
 top: 250px;
 left: 85px;


 @media (max-width: 1024px) {
  display: none;
  }


`

export const MasDetalles = styled.div`
 width: 200px;
 height: 250px;
 position: absolute;
 top: 225px;
 right: 15px;
 display: flex;
 margin: 25px; 
 padding:10px;
 justify-content: space-around;
 flex-direction: column;
 align-items: center;
 box-shadow: 0px 25px 20px -1px rgba(0,0,0,0.38);
 border-radius: 1rem;
 background-color: #fff;
 text-align: justify;
 overflow: hidden;
 color: ${PetrolBlue};
 z-index: 1;


@media (max-width: 1024px) {
display: none;
}

`

export const ContainerMoreInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;
text-align: left;
font-size: 12px;
padding-left: 10px;

@media (max-width: 1224px) {
  display: none;
  }

`