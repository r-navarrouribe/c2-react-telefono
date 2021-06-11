import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { tecladoNumerico, typeNumber, clearDisplay, eraseLastNumber } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        <Tecla tecladoNumerico={tecladoNumerico} typeNumber={typeNumber} />
        <li>
          <button onClick={eraseLastNumber}>borrar</button>
        </li>
        <li>
          <button onClick={clearDisplay}>borrar Todo</button>
        </li>
      </ol>
    </div>
  );
};
