import { Tecla } from "./Tecla";

export const Teclado = () => {
  return (
    <div className="botones">
      <ol className="teclado">
        <Tecla />
        <li>
          <button>borrar</button>
        </li>
        <li>
          <button>borrar Todo</button>
        </li>
      </ol>
    </div>
  );
};
