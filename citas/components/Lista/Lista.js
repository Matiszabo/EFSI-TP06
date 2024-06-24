import { Cita } from '../Cita/Cita';
export function Lista({ citas, setCitas}) {
    return (
        <>
            {citas.map((item, id) => (
                <Cita
                    key = {id}
                    citas = {citas}
                    setCitas = {setCitas}
                    mascota={item.mascota}
                    dueño={item.dueño}
                    fecha={item.fecha}
                    hora={item.hora}
                    sintomas={item.sintomas}
                    id={id}
                />
            ))}
        </>


    );
}
