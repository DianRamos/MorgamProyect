import styled from "styled-components";


export const Benefits = styled.div`

display: grid; 
height:200px;
grid-template-columns: repeat(3, 1fr); 
grid-template-rows: 1fr; 
grid-column-gap: 15px;
grid-row-gap: 0px; 
@media (max-width: 1024px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr); 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
    height:100%;
    grid-row-gap: 50px; 
    width:100%;
    padding-left: 200px;
}

@media (max-width: 667px) {
    padding-left: 5px;

}
`

export const Bonus = styled.div`

grid-area: 1 / 1 / 2 / 2;
border: 1px solid orange;
border-radius: 20px;
width: 350px;
webkit-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
moz-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
@media (max-width: 1024px) {
    grid-area: 1 / 1 / 2 / 3;
    width: 250px;
    margin-left: 50px;
}
`
export const ChangeRV= styled.div`

grid-area: 1 / 2 / 2 / 3;
border: 1px solid orange;
border-radius: 20px;
width: 350px;
webkit-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
moz-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
@media (max-width: 1024px) {
    grid-area: 2 / 1 / 3 / 3;
    width: 250px;
    margin-left: 50px;
}
`

export const Extras= styled.div`

grid-area: 1 / 3 / 2 / 4;
border: 1px solid orange;
border-radius: 20px;
width: 350px;
webkit-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
moz-box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
box-shadow: 6px 10px 5px -1px rgba(148,136,148,0.34);
@media (max-width: 1024px) {
    grid-area: 3 / 1 / 4 / 3;
    width: 250px;
    height:200px;
    margin-left: 50px;

}
`

export const Question = styled.span`
font-size:20px;
color: #14213D;
font-weight: bold;
`

export const ContinerBenefits = styled.div`
padding-top:50px;
height:400px;
@media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    width: 100%;
    height:100%;
}
`

export const ContainerTitle = styled.div`
background: #fba617;
padding-bottom:10px;
margin-bottom:70px;
display:flex;
height:10px;
justify-content: center;
align-items: center;

`
export const Title = styled.h3`
background-color:#E5E5E5;
width: 350px;
height:32px;

`

export const SpamIcon = styled.span`

width: 60px;
height: 60px;
background: #E5E5E5;
border: 1px solid #fba617;
border-radius: 50%;
padding: 12px;
display: flex;
align-items: center;
justify-content: center;

margin-top:-30px;
margin-left:150px;

@media (max-width: 1024px) {
    margin-left:100px;
   
}

`

