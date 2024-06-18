import { Navbar } from "@/components/Navbar/Navbar";
import { Text } from "@/components/Text/Text";

export default function Page() {

  const prompt = `
    En nuestra clinica los Goats nos aseguramos del cuidado y el bienestar de tus adorables mascotas. Con nuestro equipo altamenet apasionados por lo que hacen, impulsados por el amor hacia los animales, brindaremos el mas alto nivel por cada paciente que tengamos.
    Brindaremos el mejor servicio, ya sea que tu mascota necesite un chequeo de rutina o atención médica especializada estamos aqui para ayudarle.
    ¡Esperamos conocerte a ti y a tu peludo amigo pronto!`;

  return (
    <>
      <Navbar />
      <h1>¡Bienvenido a la Clínica Los Goats!</h1>
      <Text txt={prompt} />
    </>
  );
}
