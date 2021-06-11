import { useState } from "react";
import { Acciones } from "./components/Acciones";
import { Informacion } from "./components/Informacion";
import { Teclado } from "./components/Teclado";

function App() {
  // Declaraciones Teclado
  const tecladoNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numberTyped, setNumberTyped] = useState(""); // Contenido del display
  const typeNumber = (numero) => {
    if (numberTyped.length === 9) {
      return;
    }
    setNumberTyped(numberTyped + numero);
  };
  const clearDisplay = () => {
    setNumberTyped("");
  };
  const eraseLastNumber = () => {
    setNumberTyped(numberTyped.slice(0, -1));
  };
  // Declaraciones llamar / colgar

  return (
    <>
      <div className="contenedor">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Informacion />
        <main className="telefono">
          <Teclado
            tecladoNumerico={tecladoNumerico}
            typeNumber={typeNumber}
            clearDisplay={clearDisplay}
            eraseLastNumber={eraseLastNumber}
          />
          <Acciones numberTyped={numberTyped} />
        </main>
      </div>
    </>
  );
}

export default App;
