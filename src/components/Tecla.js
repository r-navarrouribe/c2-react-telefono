export const Tecla = (props) => {
  const { tecladoNumerico, typeNumber, llamando } = props;
  return (
    <>
      {tecladoNumerico.map((tecla) => (
        <li key={tecla}>
          <button
            onClick={() => typeNumber(tecla)}
            disabled={llamando ? true : false}
          >
            {tecla}
          </button>
        </li>
      ))}
    </>
  );
};
