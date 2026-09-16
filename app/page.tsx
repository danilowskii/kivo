import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ComoTrabajamos from "./components/ComoTrabajamos";
import AntesDespues from "./components/AntesDespues";
import ElSistema from "./components/ElSistema/ElSistema";
import Cases from "./components/Cases/Cases";
import Servicios from "./components/Servicios/Servicios";
import Equipo from "./components/Equipo/Equipo";
import Contacto from "./components/Contacto/Contacto";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <ComoTrabajamos />
      <AntesDespues />
      <ElSistema />
      <Cases />
      <Servicios />
      <Equipo />
      <Contacto />
    </div>
  );
}
