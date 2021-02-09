import React from "react";
import Gasto from "./Gasto";
import PropTypes from 'prop-types';


const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h3>Listado</h3>
    {gastos.length > 1 ? (
      gastos.map((gasto) => gasto.id && <Gasto key={gasto.id} gasto={gasto} />)
    ) : (
      <>
        <h5>No se ingresó ningún gásto</h5>
        <hr />
      </>
    )}
  </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;
