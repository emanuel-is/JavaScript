/* loguin : pedir usuario y pass al cliente
tiene 3 intentos.
ingreso correcto: en un menensaje de bienvenida con el nombre.
ingreso incorrecto: envio mensaje y finalizo el bucle */


// ---------------------Bucle For------------------

/* 
let usuario1 = "ema";
let passUser1 = 1234
let error = 0;

for (let i = 0 ;  i < 4   ; i= i + 1 )  { //inicializo el bucle
    
    let usuario = prompt("ingrese su usuario")  //por cada vuelta pido usuario y contraseña
    let pass = prompt("ingrese su pass")

    if (usuario == usuario1 && passUser1 == pass){  //le pongo la condicio para que entre si se cumple 
        
        console.log ("hola guacho")
    }
    else {
        console.log("error :"+ i);  // muestro en consola el contador de intentos
        error = error + 1;          // por cada intento le sumo 1
        if (error == 3){             //sub condiciono para que cuando sea = a 3 rompa el bucle y muestre mensaje
            console.log("fuiste");
            break;                      //si se da esta condicion rompe el bucle
        }
    }
}
 */



//----------------------- while---------------
/* 
let user = prompt("ingrese usuuario o ESC para salir")   //pido ingresar un usuario y una palabra para 

while (user != ESC) {           //creo bucle while (mientras que) usuario se distinto a ESC haga el bucle.
    console.log ("hola: "+ user); // dentro del bucle imprimo por consola el saludo.
    user = prompt ("ingrese su nombre o ESC para salir"); //y le pido volver a ingresar otro user.
    
}
 */


//----------------------DO...While---------------
/* 
do{                         //creo el do para ejecutar la primera accion antes que el bucle
    var user = prompt("ingrese su usuario");    //pido ingreso de user
    console.log("bienvenido al sistema "+ user); //Saludo por consola

}while (user !="ESC")  // genero el bucle. que en caso que el condicional se cumpla (ESC) el bucle no se ejecuta.

 */

///crea un programa para la votacion de un club de barrio.
//no se sabe cuantas personas van a votar. 
//se puede votar entre A y B.

/* 
var persona = prompt("ingrese la persona a votar")
let VotoA = 0;
let VotoB = 0;

while (persona != "Fin") {
    let Voto = prompt("Vote por A o Por B");
    console.log(persona);
    console.log(" Votó por: "+ Voto);
    var persona = prompt("ingrese la persona a votar");
    
    if (Voto =="A" || Voto == "a" ) {

        VotoA = VotoA + 1;
        
        
    }
    else if((Voto =="B" || Voto == "b" ) ){
        VotoB = VotoB + 1;
        
    }else{
        console.log("Voto nulo")

    }
}
console.log("total de votos para A :"+VotoA);
console.log("Total de votos para B :"+VotoB);

if (VotoA > VotoB){
    console.log("el ganador es el Partido A , con "+VotoA+ " votos.");


}else {
    console.log("el ganador es el Partido B , con "+VotoB+ " votos.");
}
 */


//crear una FUNCION que retorne el año de nacimiento. 

/* 
function anioNacimiento (edad) {

    console.log(2021 - edad);
}


function validaredad (edad) {
    if (edad >= 18) {
        console.log("es mayor")
    }
    else{
        console.log("es menor de edad")
    }

}


let edad =parseInt(prompt("ingrese su edad"));
anioNacimiento(edad);
validaredad(edad);
 */



//crear un programa que calcule los descuentos en un precio.
//lune -5% , miercoles -15%, sabado -20%.
//iva : 21%.
//calcular precio final. 



function iva (precioProducto) { //calculo el  precio del iva
    let precionConiva = precioProducto * 0.21;
    return precionConiva;       //retorno el precio del iva

}

function descuentos (precioProducto , dia) {   //creo funcio con dos variables. 
    if (dia == "lunes"){                        //condicional de cuanto es el descuento el dia lunes
        let descuento = precioProducto * 0.05;
        return descuento;
    }
    else if (dia == "miercoles") {              //condicional de cuanto es el descuento el dia miercoles.

        let descuento = precioProducto * 0.15;
        return descuento;
    }
    else if (dia == "sabado"){                     //condicional de cuanto es el descuento el dia sabado.
        let descuento = precioProducto * 0.20;
        return descuento;
    }
    else {                                          //condicional de cuanto es el descuento cualquier otro dia.
        let descuento = precioProducto * 0; 
        return descuento;
    }



}

let precioProducto = parseFloat(prompt("ingrese un precio"));  //pido precio pasado a numero
let dia = prompt("ingrese el dia de la compra");                   //pido dia

let precioTotal = ((precioProducto  + iva (precioProducto))- descuentos (precioProducto , dia));     //realizo la operacion, al precio le sumo el iva y les descuento el descuento para ese precio
console.log("El precio total es :" + precioTotal)               // imprimo el resultado del total. 




// --------------funciones anonimas------------------------



const suma  = function (a, b) { return a + b }; // creo la funcion con los parametros sin valores y con lo que tiene que retornar
const resta = function (a, b) { return a - b };


console.log(suma(15,20)); // imprimo por sonsola la constante y le paso los parametros que necesita
console.log(resta(15,5));