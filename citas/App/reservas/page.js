"use client";

import { useEffect, useState } from "react";

const { default: Citas } = require("../components/citas/Citas");
const { default: Formulario } = require("../components/formulario/Formulario");
const { default: Header } = require("../components/header/Header");

function Reserva() {
  const localCitas = localStorage.getItem("citas");
  
  const [citas, setCitas] = useState(localCitas ? JSON.parse(localCitas) : []);

  const agregarCita = (nuevaCita) => {

    if (window.confirm("¿Estás seguro de agregar esta cita?")) {
      setCitas([...citas, nuevaCita]);
    }
  };

  const eliminarCita = (indice) => {
    if (window.confirm("¿Estás seguro de eliminar esta cita?")) {
      const nuevasCitas = [...citas];
      nuevasCitas.splice(indice, 1);
      setCitas(nuevasCitas);
    }
  };  

  useEffect(() => { 
    localStorage.setItem("citas",JSON.stringify(citas));
  }, [citas]);  

  return (

    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} /> {}
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Citas citas={citas} eliminarCita={eliminarCita} /> {}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserva;