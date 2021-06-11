export const Tecla = (props) => {
  const { tecladoNumerico, typeNumber } = props;
  return (
    <>
      {tecladoNumerico.map((tecla) => (
        <li key={tecla}>
          <button onClick={() => typeNumber(tecla)}>{tecla}</button>
        </li>
      ))}
    </>
  );
};
