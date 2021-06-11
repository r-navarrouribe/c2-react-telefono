import { Display } from "./Display";

export const Acciones = (props) => {
  const { numberTyped, llamando, llamaCuelga } = props;
  return (
    <div className="acciones">
      <Display numberTyped={numberTyped} />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <button
        className={`llamar${numberTyped.length === 9 ? " activo" : ""}${
          llamando ? " off" : ""
        }`}
        onClick={() => llamaCuelga()}
        disabled={numberTyped < 9 ? true : false}
      >
        Llamar
      </button>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <button
        className={llamando ? `colgar activo` : `off`}
        onClick={() => llamaCuelga()}
      >
        Colgar
      </button>
    </div>
  );
};
