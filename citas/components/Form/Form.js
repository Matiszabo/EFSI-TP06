import Boton from '../Boton/Boton';
import './Formulario.css';

function Formulario({ citas, setCitas }) {

  const validarDatos = (e) => {
    const mascota = e.target.nombremascota.value;
    const dueno = e.target.nombredueno.value;
    const fecha = e.target.fecha.value;
    // Validar que no haya números en los nombres
    const letras = /^[A-Za-z]/;
    const hoy =  new Date().toISOString().split('T')[0];
    if (!letras.test(mascota) || !letras.test(dueno)) {
      alert("Por favor, ingresa solo letras en los campos de nombre.");
      e.preventDefault();
      return false; 
    }
     if (fecha < hoy) {
      alert("La fecha de la cita no puede ser anterior a la fecha actual.");
      e.preventDefault();
      return false;
    }
    return true;

  };

  const crearCita = (e) => {
    e.preventDefault();

    if (!validarDatos(e)) {
      return;
    }

    const nuevaCita = {
      nombremascota: e.target.nombremascota.value,
      nombredueno: e.target.nombredueno.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value
    };

    // Mostrar un mensaje de confirmación antes de agregar la cita
    const confirmar = window.confirm("¿Estás seguro de que deseas agregar esta cita?");
    if (confirmar) {
      setCitas([...citas, nuevaCita]);
    }
  };

  return (
    <form onSubmit={crearCita}>
      <div className="casillaForm">
        <label>Nombre Mascota</label>
        <input type="text" name="nombremascota" placeholder="Nombre de tu mascota" required />
      </div>
      <div className="casillaForm">
        <label>Nombre Dueño</label>
        <input type="text" name="nombredueno" placeholder="Nombre dueño de la mascota" required />
      </div>
      <div className="casillaForm">
        <label>Fecha</label>
        <input type="date" name="fecha" required />
      </div>
      <div className="casillaForm">
        <label>Hora</label>
        <input type="time" name="hora" required />
      </div>
      <div className="casillaForm">
        <label>Sintomas</label>
        <textarea name="sintomas" required></textarea>
      </div>
      <Boton sendText={"Agregar Cita"} type="submit" evento=""></Boton>
    </form>
  );
}

export default Formulario;
