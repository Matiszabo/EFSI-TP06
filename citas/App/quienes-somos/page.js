import { Text } from "/components/Text/Text";

export default function Page() {

  const prompt = `
  En nuestra clínica, nos dedicamos con pasión al cuidado y bienestar de tus mascotas. Contamos con un equipo de veterinarios altamente cualificados y comprometidos, cuyo principal objetivo es brindar atención médica de la más alta calidad y personalizada para cada uno de nuestros pacientes peludos.
  En la Clínica Veterinaria Los Goats, entendemos que tus mascotas son mucho más que simples animales; son parte esencial de tu familia. Por eso, nos esmeramos en crear un ambiente acogedor y familiar donde tanto tú como tus queridas mascotas se sientan bienvenidos y cómodos.
  Nos comprometemos a ser tu compañero de confianza en el viaje del cuidado de tus mascotas.
   `;

  return (
    <>
      <h1>Los Goats</h1>
      <Text txt={prompt} />
    </>
  );
}
