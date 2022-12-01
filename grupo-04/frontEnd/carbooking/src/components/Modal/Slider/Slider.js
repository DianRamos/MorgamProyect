import React, { useState, useEffect }from "react";
import { useParams} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/icons.css"

import { ContainerSlider, ImgOne, ImgTwo, ImgThree, ImgFour, Parrafo, ContainerImg } from "../../Modal/Slider/Slider.styles";
import { GrNext, GrPrevious } from 'react-icons/gr';

const Carousel = () =>{

    const NextArrow = ({ onClick }) => (
        <GrNext className="next" onClick={onClick}> </GrNext>
      );
      const PreviousArrow = ({ onClick }) => (
          <GrPrevious className="prev" onClick={onClick}></GrPrevious>
      );

      const { id } = useParams();
      const [imagenesProducto, setImagenesProducto] = useState(null);

      useEffect(() => {
        const request = async () => {
          const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
          const result = await response.json();
          setImagenesProducto(result);
        }
        request();
      }, [id]);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PreviousArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },

        ],
      };

    return(
        
       
        <ContainerSlider>
         {imagenesProducto && imagenesProducto.map(imagenesCarrusel  => (
         <Slider {...settings}>
          {imagenesCarrusel.images.length && 
            <ContainerImg>
              <ImgOne src={imagenesCarrusel.images[0].url} alt="IMAGENONE" />
              <Parrafo > 1 de 5 </Parrafo>
            </ContainerImg>
          }
          {
            imagenesCarrusel.images.length > 1 && 
            <ContainerImg>
              <ImgTwo src={imagenesCarrusel.images[1].url} alt="IMAGETWO" />
              <Parrafo> 2 de 5 </Parrafo>
            </ContainerImg>
          }
          {
            imagenesCarrusel.images.length > 2 && 
            <ContainerImg>
              <ImgThree src={imagenesCarrusel.images[2].url} alt="IMAGETHREE" />
              <Parrafo> 3 de 5 </Parrafo>
            </ContainerImg>
          }
          {
            imagenesCarrusel.images.length > 3 && 
            <ContainerImg>
              <ImgFour src={imagenesCarrusel.images[3].url} alt="IMAGEFOUR" />
              <Parrafo> 4 de 5 </Parrafo>
            </ContainerImg>
          }
          {
            imagenesCarrusel.images.length > 4 && 
            <ContainerImg>
              <ImgFour src={imagenesCarrusel.images[4].url} alt="IMAGEFOUR" />
              <Parrafo> 5 de 5 </Parrafo>
            </ContainerImg>
          }
         </Slider> ))}
        
            
    </ContainerSlider>

    );

}; 

export default Carousel; 