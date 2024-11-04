const prompt = require('prompt-sync')();

const cliente = {
  nombre: "Ada",
  apellido: "Clavario"
};

const adicionales = [
  ["jamon", 30, false],
  ["queso", 25, false],
  ["Salsa de tomate", 5, false],
  ["mayonesa", 5, false],
  ["mostaza", 5, false],
  ["tomate", 15, false],
  ["lechuga", 10, false],
  ["cebolla", 10, false],
];

console.log(`Elija el tipo de Hamburguesa
    1* Carne
    2* Pollo
    3* Vegetariana`);

let tipoDeHamburguesa = +prompt("Ingresar tipo de hamburguesa: ");
let tipoHamburguesa = "";
let base = 0;
let precioAdicional = 0;
if (tipoDeHamburguesa == 1) {
  base += 1800;
  tipoHamburguesa = "carne"
} else if (tipoDeHamburguesa == 2) {
  base += 1500;
  tipoHamburguesa = "pollo"
} else if (tipoDeHamburguesa == 3) {
  base += 1200;
  tipoHamburguesa = "vegetariana"
} else {
  console.log("No es una selección válida")
}

function precioTotal(tipoDeHamburguesa, ...data) {

  console.log("1* Si");
  console.log("0* No");
  for (let i = 0; i < adicionales.length; i++) {
    let adicional = +prompt(` ¿Quiere agregar ${adicionales[i][0]}? `);

    if (adicional != 0) {
      precioAdicional += adicionales[i][1];
      // console.log("Precio adicional: " + precioAdicional);
      // console.log("Precio base: " + base);
      // console.log(tipoHamburguesa);
    }
  }

  let precioFinal = 0;
  precioFinal = (base + precioAdicional);
  return precioFinal;
}

function fastFood(nombre, apellido, tipoHamburguesa, ...data) {

  precioFinal = precioTotal(tipoHamburguesa, ...data);

  return `Estimad@ ${cliente.nombre} ${cliente.apellido}, el monto total a pagar es de: $${precioFinal}`;
}

let mensaje = fastFood();
// console.log(mensaje);  
