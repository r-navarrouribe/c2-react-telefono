import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const {
    tecladoNumerico,
    typeNumber,
    clearDisplay,
    eraseLastNumber,
    llamando,
  } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        <Tecla
          tecladoNumerico={tecladoNumerico}
          typeNumber={typeNumber}
          llamando={llamando}
        />
        <li>
          <button onClick={eraseLastNumber} disabled={llamando ? true : false}>
            borrar
          </button>
        </li>
        <li>
          <button onClick={clearDisplay} disabled={llamando ? true : false}>
            borrar Todo
          </button>
        </li>
      </ol>
    </div>
  );
};
