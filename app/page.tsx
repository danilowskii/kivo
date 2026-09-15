import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ComoTrabajamos from "./components/ComoTrabajamos";
import AntesDespues from "./components/AntesDespues";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <ComoTrabajamos />
      <AntesDespues />
    </div>
  );
}
