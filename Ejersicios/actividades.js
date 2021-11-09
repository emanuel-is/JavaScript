/*  Actividad 1. Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente.
 Es indistinto el empleo de var o  let en la declaración. */
/* 
 let nombrePersonaje = prompt("ingrese nombre del Perdonaje");
 let apellidoPersonaje= prompt("ingrese apeliido del personaje");
 let edadPersonaje =prompt ("ingrese edad del personaje");
console.log(nombrePersonaje,apellidoPersonaje,edadPersonaje);
 */

/* Actividad 2. Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.
 Generalmente, dichas variables se declaran con const. */

/*  const Ciudad1 = "Neuquen";
 const Ciudad2 = "Rio Negro";
 const Ciudad3 = "Salta";
 const Ciudad4 = "Misiones";
 const Ciudad5 = "Buenos Aires";
 console.log(Ciudad1,Ciudad2,Ciudad3,Ciudad4,Ciudad5)
 */

 //Actividad 3. Declarar variables para representar la información de un carnet de conducir.
//Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.


/* let nombre = prompt("ingrese nombre");
let apellido = prompt ("ingrese apellidos");
let direccion =  prompt ("ingrese direccion")
let fechaNacimiento = prompt ("ingrese fecha de nacimiento, ej: dd/mm/aaaa")
let genero = prompt ("ingrese genero : M / H");
let nacionalidad = prompt("ingrese su nacionalidad")  

let carnet =nombre+" "+ apellido+ " "+direccion+ " "+ fechaNacimiento+ " " + genero + " " + nacionalidad ;
console.log (carnet) */

//Actividad 4. Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia.
// Luego, concatenar dichas entradas y efectuar una salida por alerta.

/* 
let nombre1 = prompt("ingrese el nombre de su familiar");
let nombre2 = prompt("ingrese el nombre de su familiar");
let nombre3 = prompt("ingrese el nombre de su familiar");
let nombre4 = prompt("ingrese el nombre de su familiar");
let nombre5 = prompt("ingrese el nombre de su familiar");

let grupoFamiliar = nombre1+ " , " + nombre2+ " , " + nombre3+ " , " + nombre4+ " , " + nombre5;
alert (grupoFamiliar) */

// Actividad 5. Solicitar al usuario uno o más precios.
//Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera)
// sobre los valores ingresados, y realizar una salida.


let precio1 = parseInt(prompt("ingrese el precio"));
let precioDescuento1 =(precio1 * 0.20);
console.log (precio1 - precioDescuento1);

let precio2 = parseInt(prompt("ingrese el segundo precio"));
let precioDescuento2 =(precio2 * 0.30);
console.log (precio2 - precioDescuento2);

let precio3 = parseInt(prompt("ingrese el tercer precio"));
let precioDescuento3 = precio3 - (precio3 * 0.40);
console.log (precio2 - precioDescuento2);