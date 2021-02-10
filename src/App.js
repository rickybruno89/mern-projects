import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdministradorTurnosVeterinaria from "./pages/5-administradorTurnosVeterinaria/AdministradorTurnosVeterinaria";
import Presupuesto from "./pages/6-presupuesto/Presupuesto";
import CotizadorSeguroAutomovil from "./pages/7-cotizadorSeguro/CotizadorSeguroAutomovil";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route
      path="/administrador-turnos-veterinaria"
      component={AdministradorTurnosVeterinaria}
    />
    <Route path="/presupuesto" component={Presupuesto} />
    <Route path="/cotizador-seguro-automovil" component={CotizadorSeguroAutomovil} />
  </Router>
);

export default App;
