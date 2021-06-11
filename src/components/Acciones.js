import { Display } from "./Display";

export const Acciones = (props) => {
  const { numberTyped } = props;
  return (
    <div className="acciones">
      <Display numberTyped={numberTyped} />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <a href="llamar" className="llamar">
        Llamar
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="colgar" className="colgar activo">
        Colgar
      </a>
    </div>
  );
};
