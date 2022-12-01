import React from "react";
import { useNavigate } from 'react-router-dom';
import CalendarioReserva from "./CalendarioReserva";

export default function Reserva({ id }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "100%", padding: "15px",  opacity: "0.97", color: "#FFFFFF", }}>
        <div>
          <h2 style={{ color: "#14213D", }} >Selecciona las fechas de tu reserva</h2>
          <CalendarioReserva />
          <button onClick={() => navigate(`/reserva/${id}`)}
            style={{ backgroundColor: "#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>
            Iniciar reserva
          </button>
        </div>
      </div>
    </>
  );
}