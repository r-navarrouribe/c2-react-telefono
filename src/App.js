import { Acciones } from "./components/Acciones";
import { Informacion } from "./components/Informacion";
import { Teclado } from "./components/Teclado";

function App() {
  return (
    <>
      <div className="contenedor">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Informacion />
        <main className="telefono">
          <Teclado />
          <Acciones />
        </main>
      </div>
    </>
  );
}

export default App;
