import { useState } from "react";
import { Acciones } from "./components/Acciones";
import { Informacion } from "./components/Informacion";
import { Teclado } from "./components/Teclado";
import imgAlf from "./img/image.jpg";
import imgAlf2 from "./img/image2.jpg";

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
  const [llamando, setLlamando] = useState(false);
  const [alf, setAlf] = useState(true);
  const llamaCuelga = () => {
    if (llamando) {
      setLlamando(false);
      clearDisplay();
    } else {
      setLlamando(true);
      setTimeout(() => {
        setAlf(false);
      }, 2500);
      setTimeout(() => {
        setLlamando(false);
        clearDisplay();
        setAlf(true);
      }, 5000);
    }
  };
  return (
    <>
      <div className="contenedor">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Informacion llamando={llamando} />
        <main className="telefono">
          <Teclado
            tecladoNumerico={tecladoNumerico}
            typeNumber={typeNumber}
            clearDisplay={clearDisplay}
            eraseLastNumber={eraseLastNumber}
            llamando={llamando}
          />
          <Acciones
            numberTyped={numberTyped}
            llamando={llamando}
            llamaCuelga={llamaCuelga}
          />
        </main>
      </div>
      <img
        className={llamando ? "alf" : "alf-off"}
        src={alf ? imgAlf : imgAlf2}
        alt="Alf contestando al teléfono"
      />
    </>
  );
}

export default App;
