import React, { useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, setCitas] = useState(citasIniciales)

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas])

  const crearCita = cita => {
    cita.id = Date.now();
    setCitas([...citas, cita]);

  }

  const eliminarCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas(newCitas);
  }
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Tus citas</h2>
            {
              citas.length === 0 ?
                <h2>No hay citas</h2>
                :
                citas.map(cita => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
