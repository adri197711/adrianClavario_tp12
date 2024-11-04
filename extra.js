function upperConverter(string){
 return string.toUpperCase();
} 

function dataType(parametro){
   return "El tipo de dato es: " + typeof(parametro);
}

function dogAge(edad){
  return "La edad del perro es: " + edad * 7;
}

function hourPrice(salarioMensual,cantidadDias,horasDia ){
  let valorHora = 0;
  valorHora = salarioMensual / (cantidadDias * horasDia);
  return "El valor de la hora es de: " + valorHora;
}

// console.log(upperConverter("hola"));
// console.log(dataType(5));
// console.log(dogAge(5));
//console.log(hourPrice(300000,16,8));

module.exports = {upperConverter, dataType, dogAge, hourPrice};