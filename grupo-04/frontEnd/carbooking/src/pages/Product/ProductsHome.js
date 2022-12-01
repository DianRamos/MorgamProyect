import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
//import { Card, BoxOne, BoxTwo, Image, MiniBoxOne, PCity, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";
import { Container, Card, BoxOne, BoxTwo, Image, MiniBoxOne, PCity, HInMiniBoxOne, MiniBoxTwo, Button} from "./ProductsHome.styles";

export default function ProductsHome({city, category, initialDate, finalDate}){


    const [dataApi, setDataApi] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const request = async () => {
        const response = await fetch("http://18.219.33.103:8080/products");
        const result = await response.json();
        setDataApi(result);}
        request();
      }, []);

      let products = [];
      products = dataApi?.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
  
      if( city !== ""){
          products = products.filter( product => product.city.name === city );
      }
  
      if( category !== ""){
          products = products.filter( product => product.category.id === category );
      }
   
    return(
      <>
      {products && products.map(item => {
              return city === "" || city === item.city.name ? 
              
            <Container  key={item.id}>
              <Card>
              <BoxOne> 
                  <MiniBoxOne> 
                      <h3> {item.name} </h3> 
                      <HInMiniBoxOne> {item.category.name} </HInMiniBoxOne>
                      <HInMiniBoxOne> <PCity> {item.city.name} </PCity></HInMiniBoxOne>

                  </MiniBoxOne>

                  <MiniBoxTwo>
                      {/* <div> 
                          <p> {item.characteristics}</p>
                      </div>
                     </MiniBoxTwo> */}
                        <div> 
                            <p>
                                {item?.characteristics.map((attribute) => {
                                    return attribute.name;
                                })}
                            </p>
                        </div>
                    </MiniBoxTwo>
              </BoxOne>

              <BoxTwo>
                  <Image src={item.mainImage} alt={item.name} /> 
                  <Button onClick={() => navigate(`/product/${item.id}`)} > Ver más </Button>
              </BoxTwo>
          </Card>
        </Container> 
              :
              <span></span>
          }
      )}
  </>
    );
};
