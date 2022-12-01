import React, {useState} from "react";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer";
 
import AllCategories from "../../components/category/AllCategories";
import ProductsHome from "../Product/ProductsHome";
import {ContainerAll} from "../home/home.styles";
 
 
// Estilos
import { Container } from "./home.styles";
import WhyUs from "../../components/WhyUs/WhyUs";
 
 
const Home = () => {
 
 
 
  const [city, setCity] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [category, setCategory] = useState("");
 
 
 
  return (
    <Container>

      <Banner setCity={setCity} setInitialDate={setInitialDate} setFinalDate={setFinalDate}/>
      <AllCategories setCategory={setCategory}/>
      <ContainerAll>
      <ProductsHome city={city} category={category} initialDate={initialDate} finalDate={finalDate}/>
      </ContainerAll>
      <WhyUs/>
      <Footer />
 
    </Container>
  );
};
 
export default Home;
