export const revisarPresupuesto = (presupuesto, restante) => {
  if (presupuesto / 4 > restante) {
    return "alert alert-danger";
  } else if (presupuesto / 2 > restante) {
    return "alert alert-warning";
  } else {
    return "alert alert-success";
  }
};

export const obtenerDiferenciaYear = year => {
  return new Date().getFullYear() - year;
}

export const calcularMarcaAuto = marca => {
  let incremento;
  switch (marca) {
    case 'europeo':
      incremento = 1.30
      break;
    case 'americano':
      incremento = 1.15
      break;
    case 'asiatico':
      incremento = 1.05
      break;
    default:
      break;
  }

  return incremento;
}

export const obtenerPlanSeguro = plan => {
  return (plan === 'basico') ? 1.20 : 1.50;
}