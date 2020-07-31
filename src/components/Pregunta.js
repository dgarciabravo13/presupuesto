import React, { useState } from "react";
import Error from "./Error";
const Pregunta = () => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="Necesito una cifra valida" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
