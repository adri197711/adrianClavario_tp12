let tipo = "";
let dias = 0;
let silla = true;

function rentalCar(tipo,dias,silla){
  precioPorDia=0;
    if
  (tipo == "compacto".toLowerCase()){
    precioPorDia = 14000;
  }
  else if(tipo == "mediano".toLowerCase()){
    precioPorDia = 17000;
  } else if(tipo == "camioneta".toLowerCase()){
      precioPorDia = 28000;
  }
  // console.log(precioPorDia);
  
  precioSilla = precioPorDia + 1200; 
  
  // console.log(precioSilla);
  if(!silla){
  let precioTotal = precioSilla * dias;
    // console.log(`Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de $${precioTotal}\n`);
  }else{
    precioTotal = precioPorDia *= dias
  //   console.log(`Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de $${precioTotal}\n`);
  // // console.log(precioTotal);
}
}
rentalCar("compacto",10,true);
rentalCar("mediano",5,true);
rentalCar("camioneta",2,true);
rentalCar("compacto",10,false);
rentalCar("mediano",5,false);
rentalCar("camioneta",2,false);
