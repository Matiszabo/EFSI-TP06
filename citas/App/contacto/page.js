import { Text } from "/components/Text/Text";

export default function Page() {
    
    const prompt1 = `
    En nuestra clinica los Goats, puedes consulatarnos si necesitas mas informacion sobre nuestros servicios o si deseas reservar una cita , no dudes en ponerte en contacto con nosotros.
    Te puedes comunicar con nosotros de la siguiente manera:`;
    
    const prompt2 = ` Tambien si quieres puedes visitarnos en persona durante nuestro horario de atención, por si quieres hablar personalmente con nuestro equipo.
    ¡Esperamos recibir noticias tuyas pronto!`
  return (
    <>
      <Navbar />
      <h1>¿Quieres contactarte con nosotros?</h1>
      <Text txt={prompt1} />
      <label>Correo Electrónico: LosGoats@gamil.com</label>
      <label>Teléfono: 15-5504-4225</label>
      <label>Dirección: Corrientes y Scalabrini Ortiz</label>
      <Text txt={prompt2} />
    </>
  );
}