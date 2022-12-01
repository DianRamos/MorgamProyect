import styled from "styled-components";

const Orange = "#FCA311";
const PetrolBlue = "#14213D";
const LightGray = "#E5E5E5";
const FontFamily = "'Quicksand', sans-serif;";

export const ContainerAll = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: -20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-flow: row wrap;

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0;
  min-height: 100vh;
  background: ${LightGray};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

`;

export const Headers = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  top: 0px;
  color: white;
  background: ${PetrolBlue};
  opacity: 0.96;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;

`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;

  margin-top:30px;
  padding-right:40px;
  width: 290px;
  margin-left:40px;
  margin-top 0px;

  @media (max-width: 237px) {
    display: none;
  }


  @media (max-width: 667px) {
    display: flex;
    margin: 5px;
    padding: 0;
    justify-content: space-around;
    align-items: center;
    }

 
`;

export const Icon = styled.img`
  height: 50px;
  
  @media (max-width: 1224px) {
      height: 45px;
    }
`;

export const ContainerIcon2 = styled.div`
  display: none;
  justify-content:space-between;
  margin-top:30px;
  padding-right:20px;
  width:230px;
  margin-left:40px;
  margin-top 10px;
   
  @media (max-width: 667px) {
  display: flex;
  }
`;

export const Icon2 = styled.img`
  height: 70px;
`;

export const text = styled.p`
  color: 191B1D;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;

export const ContainerBtn = styled.div`

  display: flex;
  align-items: center;
  width: 500px;
  height: 100%;


  @media (max-width: 667px) {
    display: none;
  }
`;


export const ButtonUp = styled.button`
background: ${Orange}; /* color de fondo */
color: ${PetrolBlue}; /* color de fuente */
font-weight:bold; 
border: 2px solid ${Orange}; /* tamaño y color de borde */
width: 180px;
height: 40px;
font-size: 16px;
font-family: ${FontFamily};
margin-right: 10px;
margin-left: 70px;
border-radius: 8px; /* redondear bordes */
position: relative;
z-index: 0;
overflow: hidden;
display: inline-block;

:hover {
  color: ${Orange}; /* color de fuente hover */
  font-weight: bold;
  border: 2px solid ${Orange}; /* tamaño y color de borde */
}

::after {
  content: "";
  background: ${PetrolBlue}; /* color de fondo hover */
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

export const ButtonSign = styled.button`
background: ${Orange}; /* color de fondo */
color: ${PetrolBlue}; /* color de fuente */
font-weight:bold; 
border: 2px solid ${Orange}; /* tamaño y color de borde */
width: 180px;
height: 40px;
font-size: 16px;
font-family: ${FontFamily};
margin-right: 10px;
border-radius: 8px; /* redondear bordes */
position: relative;
z-index: 0;
overflow: hidden;
display: inline-block;

:hover {
  color: ${Orange}; /* color de fuente hover */
  font-weight: bold;
  border: 2px solid ${Orange}; /* tamaño y color de borde */
}

::after {
  content: "";
  background: ${PetrolBlue}; /* color de fondo hover */
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
export const ContainerMenu = styled.div`
  display: none;
  margin-top: 30px;
  backgroun: blue;

  padding-right: 60px;
  padding-left: 20px;
  width: 50px;

  @media (max-width: 667px) {
    display: flex;
  }
`;

export const Menu = styled.img`
  height: 20px;
`;

export const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${PetrolBlue};
  opacity: 0.96;
  color: white;
  padding: 24px;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

export const AuthRigth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 58px;
  padding-top: 15px;
  padding-right: 40px;

  @media (max-width: 667px) {
    display: flex-start;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 58px;
  padding-right: 40px;

  @media (max-width: 667px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
background: ${Orange}; /* color de fondo */
color: ${PetrolBlue}; /* color de fuente */
font-weight:bold; 
border: 2px solid ${Orange}; /* tamaño y color de borde */
width: 130px;
height: 40px;
font-family: ${FontFamily};
margin-right: 10px;
padding: 5px;
border-radius: 8px; /* redondear bordes */
position: relative;
z-index: 0;
overflow: hidden;
display: inline-block;
font-weight: bold;

:hover {
  color: ${Orange}; /* color de fuente hover */
  font-weight: bold;
  border: 2px solid ${Orange}; /* tamaño y color de borde */
}

::after {
  content: "";
  background: ${PetrolBlue}; /* color de fondo hover */
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

export const UserLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 150px;
`;



