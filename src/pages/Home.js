import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleClick = () => history.push("/administrador-turnos-veterinaria");

  return (
    <div className="container">
      <button
        type="button"
        style={{ marginRight: "10px" }}
        onClick={handleClick}
      >
        Administrador de Turnos Veterinaria
      </button>
    </div>
  );
};

export default Home;
