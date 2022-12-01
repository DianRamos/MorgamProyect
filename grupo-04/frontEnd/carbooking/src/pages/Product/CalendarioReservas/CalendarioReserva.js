import React, { useState, useContext } from "react";
import Media from "react-media";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { Container, Row, Col } from "react-bootstrap";
import FechaRangoContextProvider from "../../../Context/FechaRangoContextProvider";
import "react-datepicker/dist/react-datepicker.css";

const CalendarioReserva = ({dataBooking, setDataBooking, dataHour, dataProduct}) => {
    useContext(FechaRangoContextProvider);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    
    const getFechasReservadas = () => {
 
      const reservas = dataProduct?.reservations?.map((reserva) => {
        return {
          start: new Date(reserva.startDate),
          end: new Date(reserva.endDate),
        } 
      });
      return reservas;
    };

    registerLocale("es", es);
    setDefaultLocale("es");

    const changeDateInitial = (dates) => {
      setDataBooking({
        ...dataBooking,
      
        startDate: dates[0]?.toISOString().slice(0,10),
        endDate: dates[1]?.toISOString().slice(0,10),
      })
    }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Media query="(max-width:460px)">
              {(matches) => {
                return matches ? (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    selected={startDate}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    onChange={(update) => {
                      setDateRange(update);
                      changeDateInitial(update);
                    }}
                    monthsShown={1}
                    inline
                  />
                ) : (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    onChange={(update) => {
                      setDateRange(update);
                      changeDateInitial(update);
                    }}
                    monthsShown={2}
                    inline
                  />
                );
              }}
            </Media>
          </Col>
        </Row>
      </Container>
    
    </>
  );
};

export default CalendarioReserva;