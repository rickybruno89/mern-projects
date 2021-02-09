import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdministradorTurnosVeterinaria from "./pages/AdministradorTurnosVeterinaria";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route
      path="/administrador-turnos-veterinaria"
      component={AdministradorTurnosVeterinaria}
    />
  </Router>
);

export default App;
