import { React, useState, useEffect } from "react";
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./banner.css";

import {
  BrowserContainer, SelectContainer, Select, CheckInContainer,
  CheckOutContainer, Button, ButtonContainer,
} from "./banner.styles";


const Banner = ({ setCity, setInitialDate, setFinalDate }) => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);

  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  // Cities API
  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    const request = async () => {
      const response = await fetch("http://18.219.33.103:8080/cities");
      const result = await response.json();
      setDataApi(result);
    }
    request();
  }, []);

  const [cityValue, setCityValue] = useState("");
  const search = () => {
    setCity(cityValue);
    setInitialDate(checkInDate);
    setFinalDate(checkOutDate);
  }


  return (
    <BrowserContainer>
      <h4>Alquila tu vehículo</h4>

      <SelectContainer>

        <Select onChange={e => { setCityValue(e.target.value); }}>
          {dataApi && dataApi.map((ciudad) => {
            return <option value={ciudad.name}>{ciudad.name}</option>;
          })}
        </Select>
      </SelectContainer>
      
      <CheckInContainer>
        <FaCalendarAlt className="iconCheck" />
        <DatePicker className="checkIn"
          placeholderText="Fecha de recogida"
          selected={checkInDate}
          minDate={new Date()}
          onChange={handleCheckInDate}
        />
      </CheckInContainer>
      <CheckOutContainer>
        <FaCalendarAlt className="iconCheck" />
        <DatePicker
          className="checkOut"
          placeholderText="Fecha de entrega"
          selected={checkOutDate}
          minDate={checkInDate}
          onChange={handleCheckOutDate}
        />
      </CheckOutContainer>
      <ButtonContainer>
        <Button onClick={search}>Buscar</Button>
      </ButtonContainer>

    </BrowserContainer>
  );
};

export default Banner;
