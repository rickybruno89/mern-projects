import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdministradorTurnosVeterinaria from "./pages/AdministradorTurnosVeterinaria";
import Presupuesto from "./pages/Presupuesto";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route
      path="/administrador-turnos-veterinaria"
      component={AdministradorTurnosVeterinaria}
    />
    <Route path="/presupuesto" component={Presupuesto} />
  </Router>
);

export default App;
