import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Formulario = ({ setGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    const gasto = {
      nombre,
      cantidad,
      id: Date.now(),
    };
    setGasto(gasto);
    setCantidad("");
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agrega tus gastos aquí</h3>
      {error && (
        <Error mensaje="Ambos campos son obligatorios o cantidad debe ser positiva" />
      )}
      <div className="campo">
        <label style={{ color: "black" }}>Descripción del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label style={{ color: "black" }}>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired
}

export default Formulario;
