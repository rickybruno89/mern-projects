import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleClick = (page) => history.push(page);

  return (
    <div className="container">
      <button
        type="button"
        style={{ marginRight: "10px" }}
        onClick={() => handleClick("/administrador-turnos-veterinaria")}
      >
        Administrador de Turnos Veterinaria
      </button>
      <button
        type="button"
        style={{ marginRight: "10px" }}
        onClick={() => handleClick("/presupuesto")}
      >
        Presupuesto
      </button>
    </div>
  );
};

export default Home;
