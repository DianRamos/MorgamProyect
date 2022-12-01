import React, { useState, useEffect } from 'react';
import { CardsContainer, Description, NameCategory, ProductCard, ProductCardImg, CantForRent } from "./AllCategories.styled";


const AllCategories = ({ setCategory }) => {

  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    const request = async () => {
      const response = await fetch("http://18.219.33.103:8080/categories");
      const result = await response.json();
      setDataApi(result);
    }
    request();
  }, []);


  return (
    <>
      <CardsContainer>

        {dataApi &&
          dataApi.map((item) => (
            <ProductCard key={item.id} onClick={() => setCategory(item.id)}>
              <ProductCardImg src={item.urlImage} alt={item.name} />
              <Description>
                <NameCategory>
                  <h3>{item.name}</h3>
                </NameCategory>
                <CantForRent>
                </CantForRent>
              </Description>
            </ProductCard>
          ))}
      </CardsContainer>
    </>
  );
};

export default AllCategories;