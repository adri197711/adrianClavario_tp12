function calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
  let precioBase = 0;

    switch (tipoHamburguesa) {
    case "carne":
      precioBase = 1800;
      break;
    case "pollo":
      precioBase = 1500;
      break;
    case "vegetariana":
      precioBase = 1200;
      break;
    default:
      console.log("Tipo de hamburguesa no válido");
  }

  const adicionales = [
    { agregado: jamon, precio: 30 },
    { agregado: queso, precio: 25 },
    { agregado: salsaTomate, precio: 5 },
    { agregado: mayonesa, precio: 5 },
    { agregado: mostaza, precio: 5 },
    { agregado: tomate, precio: 15 },
    { agregado: lechuga, precio: 10 },
    { agregado: cebolla, precio: 10 }
  ];

  let totalAdicionales = adicionales.reduce((agregar, adicional) => agregar + (adicional.agregado ? adicional.precio : 0), 0);

  return precioBase + totalAdicionales;
}

function fastFood(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {

  const precioFinal = calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

  return `Estimad@ ${nombre} ${apellido}, el monto total a pagar es de: $${precioFinal}`;
}

let mensaje = fastFood("Alina", "Clavario", "carne", true, true, true, true, true, true, true, true);
console.log(mensaje);  

 mensaje = fastFood("Ada", "Clavario", "pollo", true, true, false, true, true, false, false, false);
console.log(mensaje);  

 mensaje = fastFood("Victoria", "Clavario", "vegetariana", false, false, true, false, false, false, true);
console.log(mensaje);  

