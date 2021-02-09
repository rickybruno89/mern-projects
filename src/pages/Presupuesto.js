import React, { useState, useEffect } from "react";
import ControlPresupuesto from "../components/6-presupuesto/ControlPresupuesto";
import Formulario from "../components/6-presupuesto/Formulario";
import Listado from "../components/6-presupuesto/Listado";
import Pregunta from "../components/6-presupuesto/Pregunta";

const Presupuesto = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showPregunta, setShowPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});

  useEffect(() => {
    setGastos([...gastos, gasto]);
    
    const newRestante = restante - gasto.cantidad;
    setRestante(newRestante)

  }, [gasto]);

  return (
    <div className="presupuesto">
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {showPregunta ? (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setShowPregunta={setShowPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario setGasto={setGasto} />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Presupuesto;
