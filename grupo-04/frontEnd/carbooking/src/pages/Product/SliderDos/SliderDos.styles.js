import styled from "styled-components"


export const ContainerSlider = styled.div`
    
    width: 40%;
    height: 550px;
    display: none;

    @media (max-width: 1124px) {
        width: 100%;
        height: 400px; 
        display: block;
        border-radius: 5px;
        background-color: white;
        margin-top: -11px;
        padding-top: 10px;
    }


    @media (max-width: 600px) {
        width: 100%;
        height: 400px; 
        display: block;
        border-radius: 5px;
        background-color: white;
        margin-top: -11px;
        padding-top: 0px;
    }

` 

export const ContainerImg = styled.div`
    height: 300px;
    overflow: hidden;

    @media (max-width: 1124px) {
       height: 280px;

    }

    @media (max-width: 675px) {
        height: 350px;
        padding-left: 0;
     }

`

export const ImgOne = styled.img`

    width: 100%;
    height: 90%;


    
    @media (max-width: 1124px) { 
        width: 90%;
        padding-left: 90px;
    }

    @media (max-width: 675px) {
        height: 90%;
        width: 100%;
        padding-left: 0;
     }
` 

export const ImgTwo = styled.img`

width: 100%;
height: 90%;

@media (max-width: 1124px) { 
    width: 90%;
    padding-left: 90px;
}

@media (max-width: 675px) {
    height: 90%;
    width: 100%;
    padding-left: 0;
 }

` 

export const ImgThree = styled.img`

width: 100%;
height: 90%;

@media (max-width: 1124px) { 
    width: 90%;
    padding-left: 90px;
}

@media (max-width: 675px) {
    height: 90%;
    width: 100%;
    padding-left: 0;
}


` 

export const ImgFour = styled.img`
    
width: 100%;
height: 90%;

@media (max-width: 1124px) { 
    width: 90%;
    padding-left: 90px;
}

@media (max-width: 675px) {
    height: 90%;
    width: 100%;
    padding-left: 0;
 }
` 

export const Parrafo = styled.p`
    color: black; 
`