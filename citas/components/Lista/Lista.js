import React from "react";
import Cita  from '../Cita/Cita';
const Lista = ({ citas, setCitas}) => {
    return (
        <>
        {citas.map((cita, index) => ( 
            <Cita key={index} index={index} cita={cita} eliminarCita={eliminarCita} /> 
        ))}
        </>


    );
}
export default Lista;