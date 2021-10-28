//pedir nota
//igual o mayor a 7 aprobado
//menos a 7 ??

let pedirNota =prompt("Ingrese su nota");

if (pedirNota >= 7){
    console .log ("esta aprobado");
}
else if (pedirNota >=4){
    console .log ("Tienen que recuperar");
}
else {
    console .log (" DESAPROBADISIMO")
}

//pedir dos numero y sumarlo

let numero3 = prompt("ingrese primer numero");
let numero4 = prompt("ingrese segundo numnero");

let suma = parseInt(numero3) + parseInt(numero4) // con parseInt combierto el str en un int
console.log (suma)