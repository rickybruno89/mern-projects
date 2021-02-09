import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setShowPregunta }) => {
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setShowPregunta(false);
  };

  return (
    <>
      <h2 style={{ color: "#004e92" }}>Ingresa tu presupuesto</h2>
      {error && <Error mensaje="Ingrese un monto válido" />}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej: 10000"
          value={cantidad.toString()}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
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

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setShowPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
