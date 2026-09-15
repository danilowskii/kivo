import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ComoTrabajamos from "./components/ComoTrabajamos";
import AntesDespues from "./components/AntesDespues";
import ElSistema from "./components/ElSistema/ElSistema";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <ComoTrabajamos />
      <AntesDespues />
      <ElSistema />
    </div>
  );
}
